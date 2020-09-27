import React from 'react';
import './style.css'

export default function Footer() {
    return (
        <footer class="page-footer">
          <div class="container ftr">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Contact Info</h5>
                <p class="grey-text text-lighten-4">Make sure to follow us on Instagram and Facebook!</p>
              </div>
              
            </div>
          </div>

        {/* Bottom Copyright section */}
          <div class="footer-copyright">
            <div class="container center">
            © 2020 Copyright
            {/* <a class="grey-text text-lighten-4 right" href="#!">Link</a> */}
            </div>
          </div>
        </footer>
    )

}