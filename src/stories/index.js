import React from 'react';
import { storiesOf, addDecorator, linkTo, action } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import muiThemeable from 'material-ui/styles/muiThemeable';

// From App
import App from '../App';

// Import some examples from material-ui
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Chip from 'material-ui/Chip';
import DatePicker from 'material-ui/DatePicker';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import NavigationCloseIcon from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MessageIcon from 'material-ui/svg-icons/communication/message';
import FavoritesIcon from 'material-ui/svg-icons/action/favorite';
import RestoreIcon from 'material-ui/svg-icons/action/restore';
import LocationOnIcon from 'material-ui/svg-icons/communication/location-on';
import AddIcon from 'material-ui/svg-icons/content/add';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FaceIcon from 'material-ui/svg-icons/action/face';

const recentsIcon = <RestoreIcon />;
const favoritesIcon = <FavoritesIcon />;
const nearbyIcon = <LocationOnIcon />;

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

import CardExampleControlled from './CardExampleControlled';
import FlatButtonExampleSimple from './FlatButtonExampleSimple';
import RaisedButtonExampleSimple from './RaisedButtonExampleSimple';
import DatePickerExampleSimple from './DatePickerExampleSimple';
import ChallengeOne from './ChallengeOne';
import ChallengeTwo from './ChallengeTwo';
import ChallengeThree from './ChallengeThree';

import customTheme from '../custom-material-design-theme';

const edwinProfilePicture = 'https://en.gravatar.com/userimage/58215667/19cdbcd47f46e388f0966234c5e7984a.jpeg';
const bloLogoUrl = 'https://snap-snip-production.s3.amazonaws.com/jakznzhamgqgmtk1458089148760.png';

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

addDecorator(muiTheme([
  'Light Theme',
  'Dark Theme',
  customTheme,
]));

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('with a button', () => (
    <button disabled={boolean('Disabled', false)} >
      {text('Label', 'Hello Button')}
    </button>
  ))
  .add('actual App', () => <App />);

storiesOf('Programming Challenge', module)
  .addDecorator(centered)
  .addDecorator(muiTheme([customTheme]))
  .addDecorator(withKnobs)
  .add('Challenge #1', () => <ChallengeOne />)
  .add('Challenge #2', () => <ChallengeTwo />)
  .add('Challenge #3', () => <ChallengeThree />);

storiesOf('Material-UI', module)
  .addDecorator(centered)
  .addDecorator(muiTheme([customTheme]))
  .add('App Bar with Title and default left icon', () => <AppBar title="Storybook Title" />)
  .add('App Bar with Title, custom icons, and on-title-touch event', () => <AppBar
      title={<span style={{cursor: 'pointer'}}>Storybook Title</span>}
      onTitleTouchTap={() => alert('onTouchTap triggered on the title component')}
      iconElementLeft={<IconButton><NavigationCloseIcon /></IconButton>}
      iconElementRight={<FlatButton label="Save" />}
    />
  )
  .add('Bottom Navigation', () => (
    <Paper zDepth={1} style={{cursor: 'pointer'}}>
      <BottomNavigation selectedIndex={1}>
        <BottomNavigationItem
          label="Recents"
          icon={recentsIcon}
          onTouchTap={() => console.log('0')}
        />
        <BottomNavigationItem
          label="Favorites"
          icon={favoritesIcon}
          onTouchTap={() => console.log('1')}
        />
        <BottomNavigationItem
          label="Nearby"
          icon={nearbyIcon}
          onTouchTap={() => console.log('2')}
        />
      </BottomNavigation>
    </Paper>))
  .add('Autocomplete without label', () => <AutoComplete hintText='type a, b, or c' dataSource={['apple', 'blueberry', 'cherry']} onUpdateInput={(v) => console.log(v)} />)
  .add('Autocomplete with label', () => <AutoComplete hintText='type a, b, or c' floatingLabelText="Full width label" dataSource={['apple', 'blueberry', 'cherry']} onUpdateInput={(v) => console.log(v)} />)
  .add('Toggle with default position', () => <Toggle defaultToggled={true} style={{width: 100}} onToggle={() => console.log('toggled')} />)
  .add('Toggle with label', () => <Toggle defaultToggled={true} style={{width: 100}} label='Lights' />)
  .add('Avatar', () => <Avatar src={edwinProfilePicture} />)
  .add('Avatar with custom size', () => <Avatar src={edwinProfilePicture} size={100} />)
  .add('Avatar with icon', () => <Avatar icon={<MessageIcon />} />)
  .add('Avatar with icon and custom colors', () => <Avatar icon={<MessageIcon />} color={blue300} backgroundColor={indigo900} />)
  .add('Avatar with letter', () => <Avatar color={blue300} backgroundColor={indigo900} >E</Avatar>)
  .add('Avatar with badge', () => <Badge
      badgeContent={4}
      primary={true}
      badgeStyle={{top: 14, right: 14}}
    ><Avatar color={blue300} backgroundColor={indigo900} >E</Avatar></Badge>)
  .add('Floating Action Button (FAB)', () => (
    <div>
      <FloatingActionButton>
        <AddIcon />
      </FloatingActionButton>
      <FloatingActionButton mini={true}>
        <AddIcon />
      </FloatingActionButton>
      <FloatingActionButton secondary={true}>
        <AddIcon />
      </FloatingActionButton>
      <FloatingActionButton mini={true} secondary={true}>
        <AddIcon />
      </FloatingActionButton>
      <FloatingActionButton disabled={true}>
        <AddIcon />
      </FloatingActionButton>
      <FloatingActionButton mini={true} disabled={true}>
        <AddIcon />
      </FloatingActionButton>
    </div>))
  .add('Icon Button', () => <IconButton><HomeIcon /></IconButton>)
  .add('Icon Buttons with tooltips', () => (
    <div>
      <IconButton tooltip="bottom-right tooltip" tooltipPosition="bottom-right"><HomeIcon /></IconButton>
      <IconButton tooltip="bottom-center tooltip" tooltipPosition="bottom-center"><HomeIcon /></IconButton>
      <IconButton tooltip="bottom-left tooltip" tooltipPosition="bottom-left"><HomeIcon /></IconButton>
      <IconButton tooltip="top-right tooltip" tooltipPosition="top-right"><HomeIcon /></IconButton>
      <IconButton tooltip="top-center tooltip" tooltipPosition="top-center"><HomeIcon /></IconButton>
      <IconButton tooltip="top-left tooltip" tooltipPosition="top-left"><HomeIcon /></IconButton>
    </div>))
  .add('Chips', () => (
    <div>
      <Chip>
        Text Chip
      </Chip>

      <Chip
        onRequestDelete={() => console.log('delete chip')}
        onTouchTap={() => console.log('touch chip')}
      >
        Deletable Text Chip
      </Chip>

      <Chip
        onTouchTap={() => console.log('touch chip')}
      >
        <Avatar src={edwinProfilePicture} />
        Image Avatar Chip
      </Chip>

      <Chip
        onRequestDelete={() => console.log('delete chip')}
        onTouchTap={() => console.log('touch chip')}
      >
        <Avatar src={edwinProfilePicture} />
        Deletable Avatar Chip
      </Chip>

      <Chip
        onRequestDelete={() => console.log('delete chip')}
        onTouchTap={() => console.log('touch chip')}
      >
        <Avatar color="#444" icon={<FaceIcon />} />
        SvgIcon Avatar Chip
      </Chip>

      <Chip onTouchTap={() => console.log('touch chip')} >
        <Avatar size={32}>A</Avatar>
        Text Avatar Chip
      </Chip>

      <Chip
        backgroundColor={blue300}
        onRequestDelete={() => console.log('delete chip')}
        onTouchTap={() => console.log('touch chip')}
      >
        <Avatar size={32} color={blue300} backgroundColor={indigo900}>
          MB
        </Avatar>
        Colored Chip
      </Chip>
    </div>
  ))
  .add('Text Fields', () => (
    <div>
      <TextField
        hintText="Hint Text"
      /><br />
      <br />
      <TextField
        hintText="The hint text can be as long as you want, it will wrap."
      /><br />
      <TextField
        id="text-field-default"
        defaultValue="Default Value"
      /><br />
      <TextField
        hintText="Hint Text"
        floatingLabelText="Floating Label Text"
      /><br />
      <TextField
        defaultValue="Default Value"
        floatingLabelText="Floating Label Text"
      /><br />
      <TextField
        hintText="Hint Text"
        floatingLabelText="Fixed Floating Label Text"
        floatingLabelFixed={true}
      /><br />
      <TextField
        hintText="Password Field"
        floatingLabelText="Password"
        type="password"
      /><br />
      <TextField
        hintText="MultiLine with rows: 2 and rowsMax: 4"
        multiLine={true}
        rows={2}
        rowsMax={4}
      /><br />
      <TextField
        hintText="Message Field"
        floatingLabelText="MultiLine and FloatingLabel"
        multiLine={true}
        rows={2}
      /><br />
      <TextField
        hintText="Full width"
        fullWidth={true}
      />
    </div>
  ))

  .add('Card Example Controlled', () => <CardExampleControlled />)
  .add('Flat Button Example Simple', () => <FlatButtonExampleSimple />)
  .add('Raised Button Example Simple', () => <RaisedButtonExampleSimple />)
  .add('Date Picker Example Simple', () => <DatePickerExampleSimple />);