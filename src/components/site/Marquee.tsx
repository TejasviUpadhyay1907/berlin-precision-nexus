const logos = [
  "TATA", "MAHINDRA", "BAJAJ", "BOSCH", "ISRO", "HAL", "L&T", "SIEMENS",
  "GODREJ", "ASHOK LEYLAND", "FORCE MOTORS", "SKF", "JBM", "SUNDARAM",
  "BHARAT FORGE", "CUMMINS", "BHEL", "MRF", "APOLLO TYRES", "TVS",
];

export function CustomerMarquee() {
  const row = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden mask-fade-r">
      <div className="flex gap-16 animate-marquee whitespace-nowrap py-2">
        {row.map((l, i) => (
          <div
            key={i}
            className="text-2xl md:text-3xl font-black tracking-widest text-graphite/25 hover:text-berlin-red transition-colors duration-500"
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
