import "./Media.css"

function Media(){
    return (
      <div className="media-section">
        <div className="media-container">
          <h2 className="media-heading-gr">The media loves Plus</h2>
          <p className="media-sub-heading-gr">
            Top publications & news media talks about us
          </p>
          <div className="media-cards-container">
            <div className="each-media-card-div">
              <div className="each-media-card">
                <img src="https://plus-gold.vercel.app/static/media/vccircle.77e633c602ea372d0b58b7fa38035fa8.svg" alt="vccircle" />
              </div>
            </div>
            <div className="each-media-card-div">
              <div className="each-media-card">
                <img src="https://plus-gold.vercel.app/static/media/vccircle.77e633c602ea372d0b58b7fa38035fa8.svg" alt="forbes" />
              </div>
            </div>
            <div className="each-media-card-div">
              <div className="each-media-card">
                <img src="https://plus-gold.vercel.app/static/media/vccircle.77e633c602ea372d0b58b7fa38035fa8.svg" alt="yourstory" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Media;
  