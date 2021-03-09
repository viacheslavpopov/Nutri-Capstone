import React from 'react';

function Resources() {
    return (
        <>
          <div class="row">
            <div class="col-4 mx-auto">
              <div class="card border-0">
                <div class="card-body">
                  <h1>Helpful Resources</h1>
                  <hr />
                  <h4>Dr. Axe</h4>
                  <hr />
                  <p>Dr. Axe's website offers a blog that talks about several health topics including supplementation.</p>
                  <p><a href="https://store.draxe.com/blogs/all/tagged/health">Visit Website</a></p>

                  <hr />
                  <h4>Healthline</h4>
                  <hr />
                  <p>Healthline is a great resource to find more information on specific nutrients and supplementation.</p>
                  <p><a href="https://www.healthline.com/">Visit Website</a></p>

                  <hr />
                  <h4>Linus Pauling Institute</h4>
                  <hr />
                  <p>The Linus Pauling Institute Micronutrient Information Center</p>
                  <p>The LPI offers a Micronutrient Information Center that details key micronutrients, such as magnesium and vitamin A. Their documentation is heavily detailed and includes dosing, drug-interactions, research references, and more.</p>
                  <p><a href="https://lpi.oregonstate.edu/mic">Visit Website</a></p>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default Resources;