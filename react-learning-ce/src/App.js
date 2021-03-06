// import logo from './logo.svg';
import './App.css';

import ClassGreet from './components/BasicComponents/ClassComponent';
import Greet from './components/BasicComponents/FunctionStatelessComponent';

import FunctionClick from './components/ClickEvents/FunctionClick';
import ClassClick from './components/ClickEvents/ClassClick';

import Message from './components/ClickEvents/Message';
import Counter from './components/ClickEvents/Counter';

import ParentComponent from './components/ParentChild/ParentComponent';

import ConditionRender from './components/ConditionalRendering/ConditionRender';
import ArrayListRender from './components/ArrayListRender/ArrayListRender';
import Form from './components/FormElements/Form';
import LifeCycleA from './components/LifeCycle/LifeCycleA';
import Fragments from './components/Fragments/Fragments';
import PureRegularParent from './components/PureComponent/PureRegularParent';
import InputRefParent from './components/Refs/InputRefParent';
import ComponentRef from './components/Refs/ComponentRef';
import PortalComp from './components/PortalRender/PortalComp';
import HerosList from './components/ErrorBoundary/HerosList'; // Error Handling (Error Boundary)
import HocParent from './components/HigherOrderComponent/HocParent'; // Higher Order Component
import ParentRenderProps from './components/RenderProps/ParentRenderProps';
import ContextParent from './components/ContextPassing/ContextParent';
import PostManagement from './components/HttpBasic/PostManagement';
import StateHookParent from './components/StateHooks/StateHookParent';
import EffectsParent from './components/EffectsHook/EffectsParent';
import InteralParent from './components/EffectsHook/EffectInterval/InteralParent';
import ParentApiCallEffect from './components/EffectsHook/ApiCallEffect/ParentApiCallEffect';
import ContextHooksParent from './components/ContextHooks/ContextHooksParent';
import ReducerParent from './components/ReducerHooks/ReducerParent';
import ParentUseContextUseReducer from './components/UseContextUseReducer/ParentUseContextUseReducer';
import ParentAPIUsingHooks from './components/APIUsingHooksStateEffect/ParentAPIUsingHooks';
import ParentUseCallBack from './components/UseCallBackHooks/ParentUseCallBack';
import UseMemoHook from './components/UseMemoHook/UseMemoHook';
import ParentUseRefHooks from './components/UseRefHooks/ParentUseRefHooks';
import CustomHookParent from './components/UseCustomHooks/CustomHookParent';


function App() {
  return (
    <div className="App">
      
      {
        /*
        <CustomHookParent />
        <ParentUseRefHooks />
        <UseMemoHook />
        <ParentUseCallBack />
        <ParentAPIUsingHooks />
        <ParentUseContextUseReducer />
        <ReducerParent />
        <ContextHooksParent />
        <ParentApiCallEffect /> <!-- HTTP AJAX Call using AXIOS -->
        <InteralParent /> <!-- Intrval using effects -->
        <EffectsParent />
        <StateHookParent />
        <PostManagement /> <!-- HTTP API Calls for GET and POST --> 
        <ContextParent />
        <ParentRenderProps />
        <HocParent /> <!-- Share Common functions from Higher Order Component -->
        <HerosList /> <!-- Error Handling -->
        <PortalComp />
        <ComponentRef />
        <InputRefParent />
        <PureRegularParent />
        <Fragments />
        <LifeCycleA />
      */
      }
      

      {
        // Hello World Class Component Creation 
          // <ClassGreet name="Sneghan">
          //   Passing the Children value from Parent
          // </ClassGreet>
          // <ClassGreet name="Mithran" />
          // <ClassGreet />




        // Hello World for functional Component
          // <Greet name="Sneghan" otherName="on1">
          //   <p>element1</p>
          // </Greet>
          // <Greet name="Mithran" otherName="on1">
          //   <p>element2</p>
          //   <p>element3</p>
          // </Greet>
          // <Greet name="Sarala" otherName="on1"/>


        
        
        // Function Comp - EventHandler
          // <FunctionClick />

        
        
        
        // Class Comp - EventHandler
          // <ClassClick />

        
        
        
         // Hello world for STATE, UPDATESTATE and EVENTHANDLING
          // <Message />




        // CONSTRUCTOR - STATE - SetState - EventHandler - Increment Count
          // <Counter />

        

        // Parent > Child (STATE & FUNCTION) exchange between then
          // <ParentComponent />


        // Render the element based on condition
          // <ConditionRender />

          
        
        // Render the Elements from an Array
          // <ArrayListRender />

        

          <Form />

      }
        
    </div>
  );
}

export default App;
