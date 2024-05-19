document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById("sidebar_search");
    var searchResults = document.getElementById("search_results");

    searchInput.addEventListener("input", function () {
      var searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm.length > 0) {
        // Call a function to fetch search results based on the searchTerm
        fetchSearchResults(searchTerm);
      } else {
        searchResults.innerHTML = ""; // Clear previous search results
      }
    });

    function fetchSearchResults(searchTerm) {
      // Perform search logic here
      // For demonstration, let's assume you have an array of game titles and links
      var games = [
        { title: "Tic Tac Toe", link: "./tic-tac-toe.html" },
        { title: "Word Guessing", link: "./word.html" },
        { title: "Number Guessing", link: "./number.html" },
        { title: "Rock Paper Scissor", link: "./rock.html" },
        { title: "Scramble Game", link: "./scramble.html" },
        {
          title: "Subway Surfers",
          link: "https://poki.com/en/g/subway-surfers",
        },
        { title: "Moto-x3m", link: "https://poki.com/en/g/moto-x3m" },
        {
          title: "Rocket-soccer-derby",
          link: "https://poki.com/en/g/rocket-soccer-derby",
        },
        {
          title: "Tennis-masters",
          link: "https://poki.com/en/g/tennis-masters",
        },
        {
          title: "Sword-masters",
          link: "https://poki.com/en/g/sword-masters",
        },
        { title: "Tribals-io", link: "https://poki.com/en/g/tribals-io" },
        {
          title: "Sushi-party-io",
          link: "https://poki.com/en/g/sushi-party-io",
        },
        { title: "Narrow-one", link: "https://poki.com/en/g/narrow-one" },
      ];

      // Filter games based on the searchTerm
      var filteredGames = games.filter(function (game) {
        return game.title.toLowerCase().includes(searchTerm);
      });

      // Display search results
      if (filteredGames.length > 0) {
        var resultsHTML = "<ul>";
        filteredGames.forEach(function (game) {
          resultsHTML +=
            "<li><a href='" + game.link + "'>" + game.title + "</a></li>";
        });
        resultsHTML += "</ul>";
        searchResults.innerHTML = resultsHTML;
      } else {
        searchResults.innerHTML = "No games found";
      }
    }
  });