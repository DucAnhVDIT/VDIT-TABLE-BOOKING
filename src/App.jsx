import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TableReservation from './components/ui/TableRes';


// import Reports from './components/Reports';
// import RestaurantPlanner from './components/RestaurantPlanner';
// import GeneralSettings from './components/GeneralSettings';
// import Support from './components/Support';
import Layout from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="/table-reservation" replace />} />
          <Route path="table-reservation" element={<TableReservation />} />
          {/* <Route path="reports" element={<Reports />} />
          <Route path="restaurant-planner" element={<RestaurantPlanner />} />
          <Route path="general-settings" element={<GeneralSettings />} />
          <Route path="support" element={<Support />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;