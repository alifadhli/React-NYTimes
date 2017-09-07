var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <h5>
                        Search is powered by <a href="https://nytimes.com/">The New York Times</a>!
                        Made with <span className="glyphicon glyphicon-heart"/> by <a href="https://github.com/alifadhli">Ali Fadhli</a>.
                    </h5>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;