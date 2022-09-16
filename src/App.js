import './App.css';
import GroupNumbers from './GroupNumbers';
import PeriodicTable from './PeriodicTable';
import PeriodNumbers from './PeriodNumbers';

function App(props) {
  return (
    <div className='wrapper'>
      <div className='page-header'>
        <h1>Periodic Table with CSS Grid</h1>
      </div>
      <div className='content-wrapper'>
        <GroupNumbers />
        <PeriodNumbers />
        <PeriodicTable />
      </div>
    </div>
  );
}

export default App;
