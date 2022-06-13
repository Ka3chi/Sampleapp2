import React, { useState } from 'react';

export const useTogglePasswordVisibility = () => {
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [rightIcon, setRightIcon] = useState('md-eye')
    const handlePasswordVisible = () => {
        if (rightIcon === 'md-eye') {
          setRightIcon('md-eye-off');
          setPasswordVisible(!passwordVisible);
        } else if (rightIcon === 'md-eye-off') {
          setRightIcon('md-eye');
          setPasswordVisible(!passwordVisible);
        }
      };
    
      return {
        passwordVisible,
        rightIcon,
        handlePasswordVisible
      };
    };

