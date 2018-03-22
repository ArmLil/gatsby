import React from "react";
import Link from "gatsby-link";

const div1 =  {
        display: 'flex',
        position:'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '130px',
        height: '90px',
        border: '2px solid rgb(204, 0, 108)',
        borderRadius: '40%',
        background: '-webkit-linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)', /* For Safari 5.1 to 6.0 */
        background: '-o-linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)', /* For Opera 11.1 to 12.0 */
        background: '-moz-linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)', /* For Firefox 3.6 to 15 */
        background: 'linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)',
        top:'45%',
        left:'45%',
      };

      class Clock extends React.Component {

        state = {
          message: 'Catch me!',
          time: new Date(),
          styles: div1
        }

        timerId = (() => {
          setTimeout(this.timer = () => {
            this.setState({time: new Date()});
            this.timerId = setTimeout(this.timer, 1000);
          },1000)
        })();

        overHandler = () => {
          const messages = ['Opps!', 'Wow!', 'Try again!', 'Cannot do it?', 'ha-ha-ha'];
          let randomMessage = messages[Math.floor((Math.random() * 5))];
          this.setState({ message: randomMessage });
          const div5 =  {
            display: 'flex',
            position:'relative',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '130px',
            height: '90px',
            border: '2px solid rgb(204, 0, 108)',
            borderRadius: '40%',
            background: '-webkit-linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)', /* For Safari 5.1 to 6.0 */
            background: '-o-linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)', /* For Opera 11.1 to 12.0 */
            background: '-moz-linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)', /* For Firefox 3.6 to 15 */
            background: 'linear-gradient(hsla(328, 100%, 40%, 0.43) , yellow)',
            top:`${Math.random()*80}%`,
            left:`${Math.random()*80}%`,
          };
          this.setState({styles: div5});
        }

          render() {
            return (
              <div style={this.state.styles} onMouseOver={this.overHandler}>
                  <h4 style={{ margin :0, color: `rgb(${Math.random()*300}, 0, ${Math.random()*200})`}}>{this.state.message}</h4>
                {this.state.time.toLocaleTimeString()}
              </div>
            );
          }
      }

      export default Clock
