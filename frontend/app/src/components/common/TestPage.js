// ./src/components/common/HomePage.js
import React from 'react';
import Disqus from '../post/Disqus';
import '../css/clear.css';
import '../css/common.css';
import '../css/sm-clean.css';
import '../css/SideBar.css';
import '../css/froala_blocks.css';
import '../css/test.css';

class TestPage extends React.Component{
    handleNewComment(comment) {
		console.log(comment.text);
	}
    render() {
      //return JSX
      return(
        <div id="content" className="site-content center-relative">
            <div className="single-post-wrapper content-1070 center-relative">

                <article className="center-relative">
                    <h1 className="entry-title">
                        I like to reinvent myself
                    </h1>
                    <div className="post-info content-660 center-relative">
                        <div className="cat-links">
                            <ul>
                                <li><a href="/">Science</a></li>
                            </ul>
                        </div>
                        <div className="entry-date published">February 12, 2016</div>
                        <div className="clear"></div>
                    </div>

                    <div className="entry-content">
                        <div className="content-wrap content-660 center-relative">
                            <p>Now when I had mastered the language of this water and had come to know every trifling feature that bordered the great river as familiarly as I knew the letters of the alphabet, I had made a valuable acquisition.</p>
                            <br/>
                            <div className="clear"></div>
                        </div>
                        <div className="post-full-width">
                            <div className="image-slider-wrapper">
                                <div className="caroufredsel_wrapper">
                                    <ul id="slider1" className="image-slider slides center-text">
                                        <li><img src="demo-images/01_blogpost_galery.jpg" alt=""/></li>
                                        <li><img src="demo-images/02_blogpost_galery.jpg" alt=""/></li>
                                        <li><img src="demo-images/03_blogpost_galery.jpg" alt=""/></li>
                                    </ul>
                                </div>
                                <div className="slider1_pagination carousel_pagination left"></div>
                                <div className="clear"></div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className="content-wrap content-660 center-relative ">
                            <p>I still keep in mind a certain wonderful sunset which I witnessed when and steamboating was new to me. A broad expanse of the river was turned too blood in the middle distance the red hue brightened into gold, through which a solitary log came floating, black and conspicuous in one place a long calm slanting mark lay sparkling upon the water in another the surface was broken by boiling, tumbling rings, that were as many-tinted as an opal where the ruddy flush was faintest, was a smooth spot that was covered with graceful circles and radiating lines.</p>
                            <br/>
                            <p className="wrap-blockquote">Ever so delicately traced the shore on our left was densely wooded, and the som ber shadow that fell from this forest was broken in one place by a long, ruffled trail that shone like silver and high above the forest wall.</p>
                            <blockquote className="inline-blockquote">
                                <p>There were graceful curves, reflected images, woody on the heights, soft distances and over the whole scene far and so near, the dissolving lights drifted steadily now dissolving lights.</p>
                            </blockquote>
                            <p className="wrap-blockquote">But as I have said, a day came when I began to cease from noting the glories and the charms which the moon and the sun and the twilight wrought upon the river’s face another day came when I ceased altogether to note them. Then, if that sunset scene had been repeated, I should have looked upon it without rapture, and should have commented upon it, inwardly, after this fashion. But as I have said, a day came when I began to cease from noting the glories and the charms which the moon and the sun and the twilight wrought upon the one graceful curves, reflected images, woody heights, soft distances and over the whole sun scene, far and near, the dissolving lights drifted steadily, enriching it, every passing the moment, with new marvels of coloring. The world was new to me, and I had never seen anything like this at home. But as I have said, a day came when I began to cease from noting the glories and the charms which the moon and the sun and the twilight wrought upon the river’s face another day came when I ceased altogether to note them. Then, if that sunset scene had been repeated, I should have looked upon it without rapture, and should have commented upon it, inwardly, after this fashion.</p>
                            <br/>
                            <br/>
                            <img src="demo-images/one_drop_post_image02.jpg" alt=""/>
                            <br/>
                            <br/>
                            <p>Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit ornare. Nulla ornare leo a tortor aliquam, quis interdum ex tempor. Quisque ultricies consequat suscipit. Donec tincidunt tempor ornare. Praesent a enim vel augue suscipit auctor in gravida augue. Suspendisse ut libero sit amet augue molestie fringilla. Fusce molestie, velit a finibus eleifend, nibh odio sagittis est, id aliquet turpis orci quis nibh.</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </article>
                <Disqus shortname="test" title="title" url="penguindevs"/>
            </div>
        </div>
      )
    };
};


export default TestPage; 
