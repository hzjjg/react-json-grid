import React from "react";

export const Triangle:React.FC<any> = ( {
  size = 14,
  color = '',
  className = ''
} ) => {
  return <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.2692 6.98965C23.0395 5.65908 24.9605 5.65908 25.7309 6.98965L44.262 38.9979C45.0339 40.3313 44.0718 42 42.5311 42H5.4689C3.92823 42 2.96611 40.3313 3.73804 38.9979L22.2692 6.98965Z" fill={color ? color : ''} stroke={color ? color : ''} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
