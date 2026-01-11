import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div>
      <footer class="footer">
    <div class="footer-container">
        <div class="footer-brand">
            <h2>NFTHub</h2>
            <p>
                Join our Discord channel or follow us <br /> on Twitter to keep up to date with our latest work <br /> and announcements.
            </p><br />
            <div class="icons">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

        <div class="footer">
            <h3>Quick Link</h3>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Collection</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </div>

        <div class="footer-links">
            <h3>Community</h3>
            <ul>
                <li><a href="#">How it works!</a></li>
                <li><a href="#">Blockchain</a></li>
                <li><a href="#">Get in touch</a></li>
            </ul>
        </div>
    </div>
</footer>

    </div>
  )
}

export default Footer
