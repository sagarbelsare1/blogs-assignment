const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    image: 'https://akm-img-a-in.tosshub.com/aajtak/images/wc_image/aptopix_t20_cricket_wcup_india_south_africa_24181657816002.jpg',
    author: 'John Doe',
    authorLinkedIn: 'https://linkedin.com/in/johndoe',
    content: 'टीम इंडिया की वतन वापसी का बढ़ा इंतजार, बारबाडोस में तूफान के कारण शेड्यूल में बदलाव01 जुलाई 2024 भारतीय टीम ने बारबाडोस में दक्षिण अफ्रीका को फाइनल हराकर टी20 वर्ल्ड कप 2024 का खिताब जीता था. भारत और दक्षिण अफ्रीका के बीच खिताबी मुकाबला 29 जून, शनिवार को खेला गया था. 1 जुलाई, सोमवार को टीम इंडिया को बारबाडोस से न्यूयॉर्क के लिए निकलना था और वहां से दुबई होते हुए भारत आना था, लेकिन तूफान ने टीम के शेड्यूल में बदलाव कर दिया.'
  },
  {
    id: 2,
    title: 'First Blog Post',
    image: 'https://www.livemint.com/lm-img/img/2024/06/30/600x338/ANI-20240630150-0_1719744913036_1719747063447.jpg',
    author: 'Sagar',
    authorLinkedIn: 'https://linkedin.com/in',
    content: 'Indian cricket team reclaimed their glory as the T20 champions putting an end to a 17-year drought in the final match against South Africa in Barbados. India defeated South Africa by 7 runs.'
  },
  // Add more blog posts as needed
];

app.get('/blog-posts', (req, res) => {
  res.json(blogPosts);
});

app.get('/blog-posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = blogPosts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
