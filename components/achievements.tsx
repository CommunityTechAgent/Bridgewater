const Achievements = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Achievements & Recognition</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Achievement 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Champion of Security in Jamaica</h3>
          <p className="text-gray-700">
            When Ambassador Bridgewater assumed her duties in Jamaica, the bilateral relationship between the U.S. and
            Jamaica was strained and distrustful. Jamaica had been without a U.S. ambassador for over fifteen months and
            relations had been tested over the government of Jamaica's protracted refusal to extradite a "drug lord,"
            Christopher "Dudas" Coke, who was wanted in the U.S. for drug and related crimes. Coke is now in prison in
            the U.S. Ambassador Bridgewater not only smoothed and recalibrated the relationship with the government. She
            worked on many fronts to ensure that the people of Jamaica understood that the U.S. relationship with
            Jamaica was not one-dimensional, focused exclusively on security partnerships, countering illegal narcotics
            trafficking and other criminal activity. She utilized many tools of diplomatic engagement including
            commercial, cultural, consular and public diplomacy avenues to successfully bridge the troubled waters she
            encountered to put the relationship back on track.
          </p>
        </div>

        {/* Example Achievement 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Award for Diplomatic Excellence</h3>
          <p className="text-gray-700">
            Recognized for outstanding contributions to international relations and diplomacy.
          </p>
        </div>

        {/* Example Achievement 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Leadership in Crisis Management</h3>
          <p className="text-gray-700">
            Successfully navigated complex challenges and provided effective leadership during times of crisis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Achievements
