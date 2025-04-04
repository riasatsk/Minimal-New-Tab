        // Display current time and date
        function updateDateTime() {
            const now = new Date();
            
            // Update time
            const timeElement = document.getElementById('current-time');
            timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            // Update date
            const dateElement = document.getElementById('current-date');
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            dateElement.textContent = now.toLocaleDateString(undefined, options);
        }
        
        // Update time every second
        updateDateTime();
        setInterval(updateDateTime, 60000);
        
        // Search engine URLs
        const searchEngines = {
            google: "https://www.google.com/search?q=",
            bing: "https://www.bing.com/search?q=",
            duckduckgo: "https://duckduckgo.com/?q=",
            ecosia: "https://www.ecosia.org/search?q=",
            brave: "https://search.brave.com/search?q="
        };
        
        // Default search engine
        const defaultEngine = "google";
        
        // Handle search function
        function performSearch(engine) {
            const searchInput = document.getElementById('search-input');
            const query = searchInput.value.trim();
            
            if (query) {
                const searchUrl = searchEngines[engine] + encodeURIComponent(query);
                window.location.href = searchUrl;
            }
        }
        
        // Add event listeners to search buttons
        document.querySelectorAll('.search-button').forEach(button => {
            button.addEventListener('click', () => {
                const engine = button.getAttribute('data-engine');
                performSearch(engine);
            });
        });
        
        // Add event listener for Enter key
        document.getElementById('search-input').addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                performSearch(defaultEngine);
            }
        });

        // Focus the search input when the page loads
        window.addEventListener('load', () => {
            document.getElementById('search-input').focus();
        });