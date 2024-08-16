import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const NotesSection = () => {
  const [notes, setNotes] = useState('');

  const handleSaveNotes = () => {
    // Implement save functionality here
    console.log('Saving notes:', notes);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">Notes</h3>
      <Textarea
        placeholder="Enter notes about reservations, special events, or reminders..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="mb-2"
      />
      <Button onClick={handleSaveNotes}>Save Notes</Button>
    </div>
  );
};

export default NotesSection;