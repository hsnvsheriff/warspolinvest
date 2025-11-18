"use client";

import { useState } from "react";
import Link from "next/link";

export default function RoomEstimator() {
  const [walls, setWalls] = useState({
    north: { width: "", height: "", active: false },
    south: { width: "", height: "", active: false },
    east: { width: "", height: "", active: false },
    west: { width: "", height: "", active: false }
  });

  const [selectedWall, setSelectedWall] = useState(null);
  const [showEstimate, setShowEstimate] = useState(false);

  const pricePerSqM = 150;

  const handleWallClick = (wallName) => {
    setSelectedWall(wallName);
    setWalls({
      ...walls,
      [wallName]: { ...walls[wallName], active: true }
    });
  };

  const handleDimensionChange = (wall, field, value) => {
    setWalls({
      ...walls,
      [wall]: { ...walls[wall], [field]: value }
    });
  };

  const calculateTotal = () => {
    let totalArea = 0;
    Object.keys(walls).forEach((wall) => {
      const w = walls[wall];
      if (w.width && w.height) {
        totalArea += parseFloat(w.width) * parseFloat(w.height);
      }
    });
    return {
      area: totalArea.toFixed(2),
      price: (totalArea * pricePerSqM).toFixed(2)
    };
  };

  const handleCalculate = () => {
    setShowEstimate(true);
  };

  const resetAll = () => {
    setWalls({
      north: { width: "", height: "", active: false },
      south: { width: "", height: "", active: false },
      east: { width: "", height: "", active: false },
      west: { width: "", height: "", active: false }
    });
    setSelectedWall(null);
    setShowEstimate(false);
  };

  const { area, price } = calculateTotal();

  return (
    <>
      {/* Topbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              WarsPolInvest
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => alert("Meeting scheduling coming soon!")}
                className="hidden sm:block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Set a Meeting
              </button>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Room Cost Estimator
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Click on each wall to enter dimensions and get instant pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Room View */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 sticky top-32">
                <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
                  {selectedWall ? `Measuring ${selectedWall.toUpperCase()} Wall` : "Select a Wall to Begin"}
                </h3>
                
                {/* Modern Bird's Eye View Room */}
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  
                  {/* Room Interior - Apple Style */}
                  <div className="absolute inset-16 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl shadow-inner flex items-center justify-center border border-gray-200">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <span className="text-gray-400 text-sm font-medium">ROOM</span>
                    </div>
                  </div>

                  {/* North Wall */}
                  <button
                    onClick={() => handleWallClick("north")}
                    className={`absolute top-0 left-16 right-16 h-16 rounded-2xl transition-all duration-300 flex items-center justify-center group ${
                      selectedWall === "north"
                        ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/50 scale-105"
                        : walls.north.active
                        ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                        : "bg-white border-2 border-gray-200 hover:border-gray-400 text-gray-700 hover:shadow-xl"
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-xs font-bold tracking-wider">NORTH</span>
                      {walls.north.active && walls.north.width && walls.north.height && (
                        <div className="text-xs opacity-90 mt-0.5">
                          {walls.north.width} × {walls.north.height}m
                        </div>
                      )}
                    </div>
                  </button>

                  {/* South Wall */}
                  <button
                    onClick={() => handleWallClick("south")}
                    className={`absolute bottom-0 left-16 right-16 h-16 rounded-2xl transition-all duration-300 flex items-center justify-center group ${
                      selectedWall === "south"
                        ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/50 scale-105"
                        : walls.south.active
                        ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                        : "bg-white border-2 border-gray-200 hover:border-gray-400 text-gray-700 hover:shadow-xl"
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-xs font-bold tracking-wider">SOUTH</span>
                      {walls.south.active && walls.south.width && walls.south.height && (
                        <div className="text-xs opacity-90 mt-0.5">
                          {walls.south.width} × {walls.south.height}m
                        </div>
                      )}
                    </div>
                  </button>

                  {/* East Wall */}
                  <button
                    onClick={() => handleWallClick("east")}
                    className={`absolute right-0 top-16 bottom-16 w-16 rounded-2xl transition-all duration-300 flex items-center justify-center group ${
                      selectedWall === "east"
                        ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/50 scale-105"
                        : walls.east.active
                        ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                        : "bg-white border-2 border-gray-200 hover:border-gray-400 text-gray-700 hover:shadow-xl"
                    }`}
                  >
                    <div className="transform -rotate-90 text-center">
                      <span className="text-xs font-bold tracking-wider">EAST</span>
                      {walls.east.active && walls.east.width && walls.east.height && (
                        <div className="text-xs opacity-90 mt-0.5 whitespace-nowrap">
                          {walls.east.width} × {walls.east.height}m
                        </div>
                      )}
                    </div>
                  </button>

                  {/* West Wall */}
                  <button
                    onClick={() => handleWallClick("west")}
                    className={`absolute left-0 top-16 bottom-16 w-16 rounded-2xl transition-all duration-300 flex items-center justify-center group ${
                      selectedWall === "west"
                        ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/50 scale-105"
                        : walls.west.active
                        ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg"
                        : "bg-white border-2 border-gray-200 hover:border-gray-400 text-gray-700 hover:shadow-xl"
                    }`}
                  >
                    <div className="transform rotate-90 text-center">
                      <span className="text-xs font-bold tracking-wider">WEST</span>
                      {walls.west.active && walls.west.width && walls.west.height && (
                        <div className="text-xs opacity-90 mt-0.5 whitespace-nowrap">
                          {walls.west.width} × {walls.west.height}m
                        </div>
                      )}
                    </div>
                  </button>
                </div>

                {/* Legend */}
                <div className="mt-8 flex justify-center gap-6 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white border-2 border-gray-200 rounded"></div>
                    <span className="text-gray-600 font-medium">Not Set</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <span className="text-gray-600 font-medium">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                    <span className="text-gray-600 font-medium">Measured</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Input Panel */}
            <div className="space-y-6">
              
              {/* Dimension Inputs */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedWall ? `${selectedWall.charAt(0).toUpperCase() + selectedWall.slice(1)} Wall` : "Select a Wall"}
                </h3>

                {selectedWall ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Width (meters)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={walls[selectedWall].width}
                        onChange={(e) => handleDimensionChange(selectedWall, "width", e.target.value)}
                        className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="e.g., 4.5"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Height (meters)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={walls[selectedWall].height}
                        onChange={(e) => handleDimensionChange(selectedWall, "height", e.target.value)}
                        className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="e.g., 2.8"
                      />
                    </div>

                    {walls[selectedWall].width && walls[selectedWall].height && (
                      <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100">
                        <p className="text-sm text-blue-900 font-medium">
                          Wall Area: {(parseFloat(walls[selectedWall].width) * parseFloat(walls[selectedWall].height)).toFixed(2)} m²
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <p className="text-gray-500">
                      Click on any wall in the room diagram to start measuring
                    </p>
                  </div>
                )}
              </div>

              {/* Summary - Only show when estimate is calculated */}
              {!showEstimate && (
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Summary</h3>
                  
                  <div className="space-y-4 mb-8">
                    {Object.entries(walls).map(([name, data]) => (
                      <div key={name} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 font-medium capitalize">{name} Wall</span>
                        <span className="font-semibold text-gray-900">
                          {data.width && data.height
                            ? `${(parseFloat(data.width) * parseFloat(data.height)).toFixed(2)} m²`
                            : "—"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-gray-200 pt-6 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total Area</span>
                      <span className="text-2xl font-bold text-blue-600">{area} m²</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCalculate}
                    disabled={area === "0.00"}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:transform-none shadow-lg disabled:shadow-none"
                  >
                    Calculate Estimate
                  </button>

                  <button
                    onClick={resetAll}
                    className="w-full mt-4 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
                  >
                    Reset All
                  </button>
                </div>
              )}

              {/* Final Layered Summary with Estimate */}
              {showEstimate && parseFloat(area) > 0 && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Wall Layers */}
                  <div className="bg-white rounded-3xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Wall Breakdown</h3>
                    <div className="space-y-3">
                      {Object.entries(walls)
                        .filter(([, data]) => data.width && data.height)
                        .map(([name, data], index) => {
                          const wallArea = (parseFloat(data.width) * parseFloat(data.height)).toFixed(2);
                          const wallPrice = (parseFloat(wallArea) * pricePerSqM).toFixed(2);
                          return (
                            <div
                              key={name}
                              className="relative p-5 bg-linear-to-r from-gray-50 to-gray-100 rounded-xl border-l-4 border-blue-500 transform transition-all hover:scale-102"
                              style={{ 
                                animationDelay: `${index * 100}ms`,
                                zIndex: 10 - index 
                              }}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-bold text-gray-900 capitalize text-lg">{name} Wall</h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {data.width}m × {data.height}m
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-gray-900">{wallArea} m²</p>
                                  <p className="text-sm text-gray-600">{wallPrice} PLN</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* Price Estimate Card */}
                  <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-3xl shadow-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Price Estimate</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-emerald-400/30">
                        <span className="text-emerald-50">Total Area</span>
                        <span className="font-bold text-xl">{area} m²</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-emerald-400/30">
                        <span className="text-emerald-50">Rate</span>
                        <span className="font-bold text-xl">{pricePerSqM} PLN/m²</span>
                      </div>
                      <div className="pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xl font-semibold">Total Cost</span>
                          <span className="text-4xl font-bold">{price} PLN</span>
                        </div>
                        <p className="text-emerald-100 text-right text-sm">
                          ≈ €{(parseFloat(price) / 4.5).toFixed(2)} EUR
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => alert("Meeting scheduling coming soon!")}
                      className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Set a Meeting
                    </button>
                    <button
                      onClick={resetAll}
                      className="flex-1 bg-white text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 border-2 border-gray-200"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </>
  );
}