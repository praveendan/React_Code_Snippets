import React, { useEffect } from "react";
/**
 * To create a HOC in React, we define a function that takes a component as
 * an argument and returns a new component that wraps the original
 * component. Here's an example of a simple HOC:
 */
const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      // Log data on component mount
      console.log(`Component ${WrappedComponent.name} mounted.`);
      return () => {
        // Log data on component unmount
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      // Log data on component update
      console.log(`Component ${WrappedComponent.name} updated.`);
    });

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;
  return WithLogger;
};

export default withLogger;
