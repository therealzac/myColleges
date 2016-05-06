const React = require('react');

const Landing = React.createClass({
  componentDidMount: function () {
    $(function() {

        $('body').addClass('landing-page');
        $('body').attr('id', 'page-top');

        // Page scrolling feature
        $('a.page-scroll').bind('click', function(event) {
            var link = $(this);
            if ($(link.attr('href')).offset()) {
              $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top - 50
              }, 500);
            }
        });

        var cbpAnimatedHeader = (function() {
            var docElem = document.documentElement,
                    header = document.querySelector( '.navbar-default' ),
                    didScroll = false,
                    changeHeaderOn = 200;
            function init() {
                window.addEventListener( 'scroll', function( event ) {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( scrollPage, 250 );
                    }
                }, false );
            }
            function scrollPage() {
                var sy = scrollY();
                if ( sy >= changeHeaderOn ) {
                    $(header).addClass('navbar-scroll')
                }
                else {
                    $(header).removeClass('navbar-scroll')
                }
                didScroll = false;
            }
            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }
            init();
        })();
    });
  },

  componentWillUnmount: function () {
    $(function() {
        $('body').removeClass('landing-page');
    });
  },

  render: function () {
    return (
      <div>
          <div id="inSlider" className="carousel carousel-fade" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <div className="container">
                        <div className="carousel-caption" style={{marginLeft: "40%"}}>
                          <h1 className="landing-header">Find your future.</h1>
                        </div>
                    </div>
                    <div className="header-back one" style={{background: "image-url('header_one.jpg') 50% 0 no-repeat"}}></div>

                </div>
            </div>
            </div>
          </div>
    )
  }
});

module.exports = Landing;
