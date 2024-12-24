import React from "react";

export const Triangle:React.FC<any> = ( {
  size = 16,
  className = ''
} ) => {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path></svg>
}