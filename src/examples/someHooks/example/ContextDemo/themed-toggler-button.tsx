/*
 * @Author: 归宿
 * @Date: 2022-09-22 16:27:40
 * @Description: 
 */
import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component<{ onClick?: () => void }> {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}>
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
