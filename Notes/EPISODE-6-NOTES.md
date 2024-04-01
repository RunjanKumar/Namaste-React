# monolithArcitecture and microArcitecture

// wait for api response so use wait for render the ui
Loads -> Api -> Render

// always use the second approach
Loads -> Render -> Api -> reRender
when state variable change react rerender the component again.