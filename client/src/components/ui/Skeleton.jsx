import React from 'react';
import '../../styles/components/ui/skeleton.css';

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

Skeleton.defaultProps = {
  className: '',
};

export { Skeleton };
