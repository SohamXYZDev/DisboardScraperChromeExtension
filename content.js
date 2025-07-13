(function() {
    // Environment variables - these should be loaded from .env file
    const website = process.env.TARGET_WEBSITE || 'disboard.org';
    const url = process.env.DISCORD_WEBHOOK_URL || '';
    const searchTag = process.env.SEARCH_TAG || '.is-discord';
    const onlineMembersTag = process.env.ONLINE_MEMBERS_TAG || '.server-online';
    const delayMs = parseInt(process.env.DELAY_MS) || 250; // Delay in milliseconds (adjust as needed)
    
    const elements = document.querySelectorAll(searchTag);
    const onlineMembers = document.querySelectorAll(onlineMembersTag);
    const elementsArray = Array.from(elements);
    const onlineMembersArray = Array.from(onlineMembers);

    console.log(elements);
    console.log("Searching for elements with class " + searchTag + "...");

    async function sendMessageWithDelay(element, delay) {
        return new Promise(resolve => {
            setTimeout(async () => {
                const pathname = element.getAttribute('href');
                var fullUrl = 'https://' + website + pathname;
                fullUrl = fullUrl + `\n\nOnline Members: ${onlineMembersArray[elementsArray.indexOf(element)].textContent}`;
                console.log("Found element with class " + searchTag + ": " + fullUrl);
                

                const data = {
                    content: fullUrl
                };
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    if (response.ok) {
                        console.log('Message sent successfully!');
                        resolve(true);
                    } else {
                        console.error('Error sending message:', response.statusText);
                        resolve(false);
                    }
                } catch (error) {
                    console.error('Fetch error:', error);
                    resolve(false);
                }
            }, delay);
        });
    }

    async function processElements() {
        for (const element of elements) {
            await sendMessageWithDelay(element, delayMs);
        }
    }

    processElements();
})();