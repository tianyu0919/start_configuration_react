/*
 * @Author: 归宿
 * @Date: 2022-09-22 16:28:04
 * @Description: 
 */
import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';
import ThemeTogglerButton from './themed-toggler-button';

// 一个使用 ThemedButton 的中间组件
function Toolbar(props: any) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component<any, { theme: any, toggleTheme: any }> {
  toggleTheme: () => void;
  constructor(props: any) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };

  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default App;