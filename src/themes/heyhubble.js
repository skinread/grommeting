import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

export const Theme = deepMerge(grommet, {
  global: {
    control: {
      border: {
        radius: '22px',
      },
    },
    drop: {
      border: {
        radius: '22px',
      },
    },
    spacing: '28px',
  },
  checkBox: {
    check: {
      radius: '22px',
    },
    toggle: {
      radius: '28px',
      size: '56px',
    },
  },
  radioButton: {
    size: '28px',
  },
  formField: {
    border: {
      size: 'small',
    },
    round: '22px',
  },
  select: {
    control: {
      extend: {
        width: '100%',
      },
    },
  },
  scale: 1.3,
});
