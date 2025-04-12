<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Election News</title>
  <style>
    /* Style your page as needed */
    .news-card {
      margin: 10px;
      padding: 10px;
      border: 1px solid #ccc;
    }
    .news-card h3 {
      margin: 0;
    }
  </style>
</head>
<body>

  <h1>Election News</h1>
  <div id="news-container"></div>

  <script>
    async function fetchElectionNews() {
      try {
        const response = await fetch('http://localhost:3000/election-news');
        const news = await response.json();
        
        const container = document.getElementById('news-container');
        container.innerHTML = '';
        
        news.forEach(item => {
          const newsCard = document.createElement('div');
          newsCard.classList.add('news-card');
          newsCard.innerHTML = `
            <h3>${item.title}</h3>
            <a href="${item.link}" target="_blank">Read more</a>
          `;
          container.appendChild(newsCard);
        });
      } catch (error) {
        console.error('Error fetching election news:', error);
      }
    }

    fetchElectionNews();
  </script>

</body>
</html>
