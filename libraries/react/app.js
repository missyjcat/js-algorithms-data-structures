/** @jsx React.DOM */

/**
 * Creating a Comment Box class with one render method that returns an element
 */

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello there! I am a CommentBox.
            </div>
            );
    }
});

/**
 * React view method that calls the render method from a class in the first
 * argument, with the target in the second argument.
 */
React.renderComponent(
    <Comment Box />,
    document.getElementById('content');
);

/**
 * The above is JSX syntax. The JSX compiler will convert the above to the
 * following:
 */
// var CommentBox = React.createClass({displayName: 'CommentBox',
//   render: function() {
//     return (
//       React.DOM.div({className: "commentBox"},
//         "Hello, world! I am a CommentBox."
//       )
//     );
//   }
// });
// React.renderComponent(
//   CommentBox(null),
//   document.getElementById('content')
// );