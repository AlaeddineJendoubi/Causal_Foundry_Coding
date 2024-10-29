import {Icon, IconProps} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import React, {FC} from 'react';

interface ActionIconProps extends IconProps {
  name: string;
  action?: () => void;
}

export const ActionIcon: FC<ActionIconProps> = ({
  name,
  action,
  ...rest
}): React.ReactElement => (
  <TouchableWithoutFeedback onPress={action && action}>
    <Icon {...rest} name={name} />
  </TouchableWithoutFeedback>
);
