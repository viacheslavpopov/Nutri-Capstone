import React from 'react';

function About() {
    return (
        <>
          <div className="row">
            <div className="col-6 mx-auto">
              <div className="card border-0">
                <div className="card-body">
                  <h1>About Nutri</h1>
                  <hr />
                  <p>Nutri is short for '<strong>nutrients</strong>', and is pronounced "<em>nu-tree</em>". The Nutri website was created by Chelsea Becker, a former Nutritionist, who is now a software developer. During her career as a nutritionist, she was often asked the same question time and time again: "What would be a good supplement to take for ______? (fill in the blank with any health issue)". There didn't seem to be a place online that would allow a person to simply click on a health issue and view the supplements used to support that health issue. Thus, Nutri was born.</p>
                  <h4>About The Creator</h4>
                  <p>Chelsea Becker resides in the Portland, OR metro area with her husband and 2 dogs. She is currently finishing up a Mobile and Web Development certificate with Epicodus Coding School located in Portland and will soon be starting a 5-week internship. This website is her final capstone project. If you are interested in her work, you can visit her GitHub page at <a href="https://github.com/cschweig2">this link</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default About;