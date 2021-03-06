import { connect } from 'react-redux';
import Home from './home';
import { pause, resume } from '../common/MediaControls/actions';

const mapStateToProps = state => ({
  isPlaying: state.mediaControls.isPlaying
});

const mapDispatchToProps = dispatch => ({
  pause: () => dispatch(pause()),
  resume: () => dispatch(resume())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
