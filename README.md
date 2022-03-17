
# Dtd-ui

simple UI component lib for web


## Installation

Install lib with npm

```bash
  npm i dtd-ui
```
Import css 
```bash
https://raw.githubusercontent.com/Danny-98/dtd-ui/main/src/assets/styles/animations.css
https://raw.githubusercontent.com/Danny-98/dtd-ui/main/src/assets/styles/button.css
https://raw.githubusercontent.com/Danny-98/dtd-ui/main/src/assets/styles/cards.css
https://raw.githubusercontent.com/Danny-98/dtd-ui/main/src/assets/styles/colors.css
https://raw.githubusercontent.com/Danny-98/dtd-ui/main/src/assets/styles/menu.css
https://raw.githubusercontent.com/Danny-98/dtd-ui/main/src/assets/styles/select.css
```

    
## Usage/Examples

```javascript
import { GlassmorphismCard, GlassmorphismContainer } from "dtd-ui";

function App() {
  return (
    <div className="App">
      <GlassmorphismContainer>
        <GlassmorphismCard idNumber="1" title="title" content="content" />
      </GlassmorphismContainer>
    </div>
  );
}
```
```javascript
import { LayerItem, LayerSocialIcon } from "dtd-ui";

function App() {
  return (
    <div className="App">
     <LayerItem>
        <LayerSocialIcon>Icon</LayerSocialIcon>
      </LayerItem>
    </div>
  );
}
```

```javascript
function App() {
  const { onShowAlert, active, message } = useAlertNotification();

  return (
    <div className="App">
      <button
        onClick={() => {
          onShowAlert({
            status: "error",
            message: "succress",
          });
        }}
      >
        click
      </button>
      <Notification message={message} active={active} />
    </div>
  );
}
```

## Demo

GlassmorphimCards

![Alt Text](https://github.com/Danny-98/dtd-ui/blob/main/src/assets/images/glassmorphimCards.gif?raw=true)

FullScreenMenu

![Alt Text](https://github.com/Danny-98/dtd-ui/blob/main/src/assets/images/fullScreenMenu.gif?raw=true)

3DlayerIcon

![Alt Text](https://github.com/Danny-98/dtd-ui/blob/main/src/assets/images/3DlayerIcon.gif?raw=true)


## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Authors

- [@ducdang98](https://github.com/Danny-98)

