import React from 'react';

//Hoc is a function that takes a component as a parameter and returns the new component wrapping the given component and supercharging it by giving it some extra capabilities
function withToggler(component)
{
  return function(props)
  {
    <Toggler/>
  }

}

export withToggler;