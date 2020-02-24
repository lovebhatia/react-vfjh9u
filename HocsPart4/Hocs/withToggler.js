import React from  'react';
export function withToggler(component)
{
  return function(props)
  {
    return (
      <Toggler component={component} {...props}/>
    )

  }

}
 