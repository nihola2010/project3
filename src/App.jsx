
import './App.css'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'
import Section from './components/section1/section'
import Green from './components/green/green'

function App() {
      let cont1 = "Home"
      let cont2 = 'About'
      let cont3 = 'Services'
      let cont4 = 'Project'
      let cont5 = 'Blog'
      let cont6 = ' Contact'

      let cont7 = 'Let Your Home'
      let cont8 = 'Be Unique'
      let cont9 = 'There are many variations of the passages of lorem'
      let cont10 = 'fromavailable,variations of the passages.'
      let cont11 = 'Get Started'

      let cont12 = 'Project Plan'
      let cont13 = 'There are many variations of the'
      let cont14 = 'passages of lorem Ipsum from'
      let cont15 = 'available, majority.'
      let cont16 = 'Interior Work'
      let cont17 = 'Realization'

      let cont18 = 'We Create The Art'
      let cont19 = 'Of Stylish Living'
      let cont20 = 'Stylishly'
      let cont21 = 'it is a long established fact that a reader will be'
      let cont22 = 'distracted by the of readable content of a page'
      let cont23 = 'when lookings at its layouts the points of using'
      let cont24 = 'that it has a more-or-less normal.'
      let cont25 = 'Get Free Estimate'
 
  return (
    <>
      <Navbar let1={cont1} let2={cont2} let3={cont3} let4={cont4} let5={cont5} let6={cont6}/>
      <Main let7={cont7} let8={cont8} let9={cont9} let10={cont10} let11={cont11}/>
      <Section let12={cont12} let13={cont13} let14={cont14} let15={cont15} let16={cont16} let17={cont17}/>
      <Green let18={cont18} let19={cont19} let20={cont20} let21={cont21} let22={cont22} let23={cont23} let24={cont24} let25={cont25}/>
    </>
  )
}

export default App
