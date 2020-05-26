// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
//picture imports--------------------------------------------------
//top section
import phone from './imges/01phone.png';
import apple from './imges/apple.svg';
import playLogo from './imges/play.svg';
// Awards
import productHunt from './imges/productHunt.svg';
import triveLogo from './imges/triveLogo.png';
// YellowSection
import goals1 from './imges/goals-1.jpg';
import goals2 from './imges/goals-2.png';
import goals3 from './imges/goals-3.png';
import goals4 from './imges/goals-4.png';
import goals5 from './imges/goals-5.png';
import bgcolorYellow from './imges/bgcolorYellow.png';
// BlueSection
import ideas1 from './imges/ideas-1.jpg';
import ideas2 from './imges/ideas-2.png';
import ideas3 from './imges/ideas-3.png';
// GreenSection
import decitions1 from './imges/decisions-1.jpg';
import decitions2 from './imges/decisions-2.png';
import decitions3 from './imges/decisions-3.png';
// Footer
import appleStoreIcon from './imges/appleAppStoreDownloadIcon.svg';

//-------------------------------------------------------------------
//Hey DUMBO! Do the css constants first and the function app after!
const containerStyle = css`
  margin: auto;
  max-width: 1000px;
  margin: 0 auto;
`;

const spanSeperator = css`
  border-top: 2px solid white;
  width: 60px;
  height: 1px;
  display: block;
  opacity: 0.3;
  margin: 70px auto;
`;

const allPhoneImageStyles = css`
  padding: 50px 116px 0 115px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 14px 14px 0 0;
  width: 264px;
`;

const allTextBoxStyles = css`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  padding: 36px 60px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 14px 14px;
`;

const topSectionStyle = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 60px auto;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
`;

const yellowPhoneStyleImg = css`
  width: 295.25px;
  height: 700px;
  margin-right: 80px;
`;

const yellowLogoText = css`
  width: 410px;
`;

const thriveLogoStyle = css`
  height: 56px;
  margin-bottom: 30px;
`;

const downloadAppStore = css`
  margin-bottom: 10px;
`;

// was trying to figure out how to work out how to implement the ::after pseudoclass in jsx but ran out of time, futher notes next to the actual item in the app

const playButton = css`
  height: 54px;
  width: 110px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-left: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  cursor: pointer;
`;

const awardBoxDivStyle = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 80px 0 50px 0;
`;

const awardBoxStyle = css`
background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    height: 76px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 492px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}`;

const yellowSectionIntro = css`
  border-radius: 24px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-repeat: repeat;
  background-image: url(https://get-thrive.app/assets/images/p3-yellow.png);
`;

// In the section above I took the color directly from the url of the original page(as you can see), and it ALMOST does what I want (although it was tricky to find I did get all the bgcolor-pngs and save them)

const yellowIntroDiv = css`
  padding: 60px 80px;
  width: 500px;
`;

const h1TextyellowIntro = css`
  font-size: 48px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 20px;
  color: black;
`;

const pTextyellowIntro = css`
  font-size: 16px;
  color: black;
`;

const yellowIntroImg = css`
  border-radius: 0 24px 24px 0;
  width: 500px;
  height: 100%;
`;

const yellowCardsContainer = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 0;
`;

const yellowCardDiv = css`
  width: 495px;
  height: 578px;
  /* margin-right: 10px; */
`;

const yellowCardBoxTopPart = css`
  padding: 50px 116px 0 115px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 14px 14px 0 0;
  width: 264px;
`;

const yellowCardBoxBottomPart = css`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  padding: 36px 60px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 14px 14px;
`;

const yellowCardParagraphText = css`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #ffdf00;
  font-weight: bold;
`;

const blueSectionIntroContrainerStyle = css`
  border-radius: 24px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-repeat: repeat;
`;

const blueImgIntroStyle = css`
  border-radius: 0 24px 24px 0;
  width: 500px;
  height: 100%;
`;

const greenIntroImgStyle = css`
  border-radius: 0 24px 24px 0;
  width: 500px;
  height: 100%;
`;

const faqSectionStyle = css`
  margin-top: 120px;
`;

const questionBoxStyle = css`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 30px;
  margin-bottom: 10px;
`;

const footerSectionStyle = css`
  margin-top: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 50px;
  font-size: 18px;
  opacity: 0.8;
  margin-left: 30px;
  cursor: pointer;
  white-space: nowrap;
`;

const footerLinksStyle = css`
  font-size: 18px;
  font-weight: bold;
`;
//____________________________________________________________________________________________________
//-------------------------------- function app next:
function App() {
  return (
    <div /*containerOfEVERYTHING*/ css={containerStyle}>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            border: 0;
            font-family: 'geomanist', sans-serif;
            font-weight: normal;
            color: white;
            background-color: #121416;
            /* font-size: 14px; */
            /* letter-spacing: 0.2px; */
            /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
              Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
              Segoe UI Symbol; */
          }
          /* * {
            box-sizing: border-box;
          } */
        `}
      />
      <section /*topSection*/ css={topSectionStyle}>
        <img src={phone} alt="01 Logo" css={yellowPhoneStyleImg} />

        <div css={yellowLogoText}>
          <img src={triveLogo} alt="triveLogo" css={thriveLogoStyle} />
          <h1>the app for getting your life together</h1>
          <p>
            A new kind of productivity app to help you tackle your toughest and
            most ambitious goals, explore new ideas and make difficult decisions
          </p>

          <div /*AppstoreButton TopYellowSection */ css={downloadAppStore}>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/thrive-goals-ideas-decisions/id1472954301?ls=1"
            >
              <img src={appleStoreIcon} alt="" />
            </a>
          </div>
          <div /*playButton */ css={playButton}>
            {/* got some issues in the FOLLOWING part understanding how to work in the pseudoclass after and make it look exactly like in the original, leaving it broken so I can see what I've been playing around with, and come back to it             */}
            <a>
              {/* <img src={playLogo} alt="playLogo" css='::after' 'Video' /> */}
              {/* '&::after': {Video} */}
            </a>
          </div>
        </div>
      </section>

      <div /*awardsSecton */ css={awardBoxDivStyle}>
        <div css={awardBoxStyle}>
          <img src={apple} alt="appleLogo" />
        </div>
        <div css={awardBoxStyle}>
          <img src={productHunt} alt="prodtuctHuntLogo" />
        </div>
      </div>

      <div css={yellowSectionIntro}>
        <div css={yellowIntroDiv}>
          <h1 css={h1TextyellowIntro}>tackle your most ambitious goals</h1>
          <p css={pTextyellowIntro}>
            Make your goals seem less monumental and vague by thinking of the
            steps required to achieve them and working on one at a time.
          </p>
        </div>
        <img src={goals1} alt="goals1Logo" css={yellowIntroImg} />
      </div>

      {/* HalfYellowandImgContainerAbove/ BoxCardContainersBelow */}

      {/* all the weird stuff of the "boxes" doubling up, are surely due to me messing up with the css and div contrainers, and same goes for sections further down with other colors, but it was just starting to cost me too much time getting things quite right, maybe it's quickly fixable later in the camp */}

      <section /*YellowCardsContainer */ css={yellowCardsContainer}>
        <div css={yellowCardDiv}>
          <div css={yellowCardBoxTopPart}>
            <img src={goals2} alt="goals2Logo" css={allPhoneImageStyles} />
          </div>
          <div css={yellowCardBoxBottomPart}>
            <p css={yellowCardParagraphText}>
              Stay on top of all <br />
              your goals
            </p>
          </div>
        </div>

        <div css={yellowCardDiv}>
          <img src={goals3} alt="goals3Logo" css={allPhoneImageStyles} />
          <p css={yellowCardBoxBottomPart}>
            Get inspiration &amp;
            <br />
            examples
          </p>
        </div>
        <div css={yellowCardDiv}>
          <img src={goals4} alt="goals4Logo" css={allPhoneImageStyles} />
          <p css={yellowCardBoxBottomPart}>
            Beat
            <br />
            procrastination
          </p>
        </div>
        <div css={yellowCardDiv}>
          <img src={goals5} alt="goals5img" css={allPhoneImageStyles} />
          <p css={yellowCardBoxBottomPart}>
            One step
            <br />
            at a time
          </p>
        </div>
      </section>
      <span css={spanSeperator}></span>

      <section /*midSectionBlue(3)*/>
        <div /*BlueSectionIntro(1)*/ css={blueSectionIntroContrainerStyle}>
          <h1>save and organise ideas</h1>
          <p>Save all your big ideas and quick thoughts throughout the day.</p>
          <img src={ideas1} alt="ideas1img" css={blueImgIntroStyle} />
        </div>
        <div /*BlueSectionAssets(2) */>
          <img src={ideas2} alt="ideas2img" css={allPhoneImageStyles} />
          <p css={allTextBoxStyles}>
            Quickly save your <br />
            important ideas
          </p>
          <img src={ideas3} alt="ideas3img" css={allPhoneImageStyles} />
          <p css={allTextBoxStyles}>
            Put your progress
            <br />
            into perspective
          </p>
        </div>
      </section>

      <span css={spanSeperator}></span>

      <section /*midSectionGreen(3)*/>
        <div /*GreenSectionIntro(1)*/ css={``}>
          <div>
            <h1>visualise your hardest decisions</h1>
            <p>
              Make big decisions more manageable by visualising the impact of
              each option on the parts of your life you care most about.
            </p>
          </div>
          <img src={decitions1} alt="decitions1img" css={greenIntroImgStyle} />
        </div>
        <div /*GreenSectionAssets(2) */>
          <img src={decitions2} alt="decitions2img" css={allPhoneImageStyles} />
          <p css={allTextBoxStyles}>
            Add your choices and the aspects of your life they’ll impact
          </p>
          <img src={decitions3} alt="decitions3img" css={allPhoneImageStyles} />
          <p css={allTextBoxStyles}>
            Rate how each aspect will be impacted and visualise the options
          </p>
        </div>
      </section>

      <section /*bottomFacts&QuestionsSection*/ css={faqSectionStyle}>
        <h2>Facts&amp;Questions</h2>
        <div /*QuestionBox1 */ css={questionBoxStyle}>
          <h3>Why isn’t this app free?</h3>
          <p>
            Unlike other apps that will try to force an unnecessary subscription
            model, sell your data or bombard you with ads, Thrive opts for a
            more honest business model where you pay once and you get everything
            forever.
          </p>
        </div>

        <div /*QuestionBox2 */ css={questionBoxStyle}>
          <h3>Is my data private?</h3>
          <p>
            Everything you do in this app is saved locally on the device or in
            your iCloud (which only you can access) so it’s 100% private.
          </p>
        </div>
        <div /*QuestionBox3 */ css={questionBoxStyle}>
          <h3>Is iCloud sync supported?</h3>
          <p>
            Yes, Thrive does support iCloud sync, but it's an optional feature.
            Turning sync on will store your data in your iCloud Documents folder
            and then all your devices that are signed in with the same iCloud
            account will stay in sync.
          </p>
        </div>
        <div /*QuestionBox4 */ css={questionBoxStyle}>
          <h3>Isn’t this similar to a reminders app?</h3>
          <p>
            Thrive is aimed at your big goals and your tough decisions.
            Reminders apps are great for simple tasks like buying something or
            messaging a colleague but they are one of the worst ways to handle
            big goals. Chances are that if you set a reminder now, you won’t
            have the time you thought you'll have, the energy or predisposition
            for it when it comes time to do it.
          </p>
          <p>
            So for Goals, thrive gives you a better format for constantly
            working on your goals, examples to help you figure out how to
            achieve them or the option to focus on a goal for a fixed time. It
            also offers a way to visualise difficult Decisions, save Ideas and
            more.
          </p>
        </div>
        <div /*QuestionBox5 */ css={questionBoxStyle}>
          <h3>What devices does this run on?</h3>
          <p>The app works on any iOS device running iOS 11 or newer.</p>
        </div>
        <div /*QuestionBox6 */ css={questionBoxStyle}>
          <h3>What else do I need to know?</h3>
          <p>
            A lot of work went into making this app, but it cannot do the work
            for you. It offers a framework for staying on top of your goals,
            organising your ideas and making decisions, but it can’t solve your
            problems automatically. You’ll have to think hard (with some help)
            about new ideas and goals, you’ll have to bring your best and stay
            determined.
          </p>
        </div>
      </section>
      <footer css={footerSectionStyle}>
        <div /*getThriveDownloadBox */ css={questionBoxStyle}>
          <h2>Get Thrive on the App Store today</h2>
          <div>
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/thrive-goals-ideas-decisions/id1472954301?ls=1"
            >
              <img src={appleStoreIcon} />
            </a>
          </div>
        </div>

        <div css={footerLinksStyle}>
          <p>Made by Cristian M.</p>
          <a href="https://apps.apple.com/gb/developer/cristian-moisei/id1397348511">
            More apps
          </a>

          <a href="https://get-thrive.app/media-kit.php">Media Kit</a>

          <a href="">Conatct&amp;Feedback</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

// fix all the img tags -> selfclosing -> ctrl+D
// remove curlies around <breaks> -> ctrl+D
