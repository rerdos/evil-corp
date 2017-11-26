import React from 'react';
import classNames from 'classnames';

export default ({ type, message }) => (
  <aside className="Notification">
    <div className={classNames({
        'Notification__message': true,
        'Notification__message--error': (type === 'error')
      })}>
      { message }
    </div>
  </aside>
);