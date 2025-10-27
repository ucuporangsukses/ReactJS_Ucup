
import './App.css'
import BasicForm from './components/BasicForm'
import MultiStepForm from './components/MultiStepForm'
import DynamicForm from './components/DynamicForm'
import { UploadForm } from './components/UploadForm'
function App() {


  return (
    <>
     <BasicForm/>
     <MultiStepForm />
     <DynamicForm />
     <UploadForm/>
    </>
  )
}

export default App
