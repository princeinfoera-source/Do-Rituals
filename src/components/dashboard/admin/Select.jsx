import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

export const Select = ({ children, value, onValueChange, disabled }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  const handleToggle = () => {
    if (!disabled) setOpen(!open);
  };

  const handleSelect = (val) => {
    onValueChange(val);
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full text-left">
      <div ref={triggerRef}>
        {React.Children.map(children, (child) => {
          if (child.type.displayName === 'SelectTrigger') {
            return React.cloneElement(child, {
              onClick: handleToggle,
              'aria-expanded': open,
              'aria-haspopup': 'listbox',
              disabled,
              value,
            });
          }
          if (child.type.displayName === 'SelectContent' && open) {
            return React.cloneElement(child, { onSelect: handleSelect, value });
          }
          return null;
        })}
      </div>
    </div>
  );
};

export const SelectTrigger = React.forwardRef(({ className, onClick, value, disabled }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      aria-haspopup="listbox"
      aria-expanded={false}
    >
      <SelectValue value={value} />
    </button>
  );
});
SelectTrigger.displayName = 'SelectTrigger';

export const SelectValue = ({ value, placeholder = 'Select an option' }) => {
  return <span className={value ? 'text-gray-900' : 'text-gray-400'}>{value || placeholder}</span>;
};

export const SelectContent = React.forwardRef(({ children, onSelect, value }, ref) => {
  return (
    <ul
      ref={ref}
      tabIndex={-1}
      role="listbox"
      className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white py-1 text-sm shadow-lg focus:outline-none"
    >
      {React.Children.map(children, (child) => {
        if (child.type.displayName === 'SelectItem') {
          return React.cloneElement(child, { onSelect, selectedValue: value });
        }
        return null;
      })}
    </ul>
  );
});
SelectContent.displayName = 'SelectContent';

export const SelectItem = React.forwardRef(({ children, value, onSelect, selectedValue }, ref) => {
  const isSelected = selectedValue === value;

  const handleClick = () => {
    onSelect(value);
  };

  return (
    <li
      ref={ref}
      role="option"
      aria-selected={isSelected}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      className={clsx(
        'cursor-pointer select-none py-2 px-3',
        isSelected ? 'bg-blue-600 text-white' : 'text-gray-900 hover:bg-gray-100'
      )}
    >
      {children}
    </li>
  );
});
SelectItem.displayName = 'SelectItem';