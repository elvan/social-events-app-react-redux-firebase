import { Button, MenuItem } from 'semantic-ui-react';
import { openModal } from '../../common/modals/modalSlice';
import { useAppDispatch } from '../../store/store';

export default function SignedOutButtons() {
  const dispatch = useAppDispatch();

  return (
    <MenuItem position='right'>
      <Button
        basic
        inverted
        content='Login'
        onClick={() => dispatch(openModal({ type: 'LoginForm' }))}
      />
      <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
    </MenuItem>
  );
}
