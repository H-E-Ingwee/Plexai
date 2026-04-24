import React, { useState } from 'react';
import { 
  BarChart3, Activity, Target, ShieldCheck, PieChart, 
  Menu, Bell, User, Zap, ChevronRight, CheckCircle2, AlertTriangle, TrendingUp 
} from 'lucide-react';

// --- Ingweplex Brand Colors ---
const COLORS = {
  orange: '#F25C05', // CTA & Alerts
  darkGray: '#262626', // Text & Secondary
  navy: '#0F1D26', // Sidebar & Backgrounds
  gold: '#D9910B' // Highlights & Success
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Inject Montserrat font globally
  const fontStyle = {
    fontFamily: "'Montserrat', sans-serif",
  };

  return (
    <div className="flex h-screen w-full bg-gray-50" style={fontStyle}>
      {/* Import Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Montserrat', sans-serif; }
        `}
      </style>

      {/* --- SIDEBAR --- */}
      <aside className="w-64 flex-shrink-0 flex flex-col text-white transition-all duration-300" style={{ backgroundColor: COLORS.navy }}>
        <div className="h-16 flex items-center px-6 border-b border-gray-700">
          <Zap style={{ color: COLORS.gold }} className="w-6 h-6 mr-2" />
          <span className="text-xl font-bold tracking-wider">Plex<span style={{ color: COLORS.orange }}>AI</span></span>
        </div>
        
        <div className="px-6 py-4 text-xs font-semibold uppercase text-gray-400 tracking-wider">
          Main Menu
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavItem 
            icon={<PieChart size={20} />} 
            label="Dashboard overview" 
            isActive={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <NavItem 
            icon={<Activity size={20} />} 
            label="CX Pulse" 
            isActive={activeTab === 'cx'} 
            onClick={() => setActiveTab('cx')} 
          />
          <NavItem 
            icon={<Target size={20} />} 
            label="Strategy Sprints" 
            isActive={activeTab === 'sprints'} 
            onClick={() => setActiveTab('sprints')} 
          />
          <NavItem 
            icon={<ShieldCheck size={20} />} 
            label="Ethical Analyzer" 
            isActive={activeTab === 'ethical'} 
            onClick={() => setActiveTab('ethical')} 
          />
          <NavItem 
            icon={<BarChart3 size={20} />} 
            label="ROI Command" 
            isActive={activeTab === 'roi'} 
            onClick={() => setActiveTab('roi')} 
          />
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <User size={16} />
            </div>
            <div>
              <p className="text-sm font-medium">Ingweplex Admin</p>
              <p className="text-xs text-gray-400">Pro Tier</p>
            </div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <div className="flex items-center text-gray-500">
            <Menu className="w-5 h-5 cursor-pointer hover:text-gray-800" />
            <span className="ml-4 font-medium" style={{ color: COLORS.darkGray }}>
              {activeTab === 'dashboard' && 'Welcome back, Ingweplex'}
              {activeTab === 'cx' && 'Customer Experience Pulse'}
              {activeTab === 'sprints' && 'Active AI Sprints'}
              {activeTab === 'ethical' && 'Brand Ethics Scanner'}
              {activeTab === 'roi' && 'ROI Command Center'}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></span>
            </button>
            <button 
              className="px-4 py-2 rounded-md text-white text-sm font-semibold shadow-md transition-transform hover:scale-105"
              style={{ backgroundColor: COLORS.orange }}
            >
              Generate New Sprint
            </button>
          </div>
        </header>

        {/* Dynamic Content Views */}
        <div className="flex-1 overflow-y-auto p-8 text-[#262626]">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'cx' && <CXPulseView />}
          {activeTab === 'sprints' && <StrategySprintsView />}
          {activeTab === 'ethical' && <EthicalAnalyzerView />}
          {activeTab === 'roi' && <ROICommandView />}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
        isActive 
          ? 'bg-opacity-20 text-white' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
      style={isActive ? { backgroundColor: `${COLORS.orange}33`, borderRight: `4px solid ${COLORS.gold}` } : {}}
    >
      <span style={{ color: isActive ? COLORS.gold : 'inherit' }}>{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="Total AI Sprints" value="12" change="+2 this week" isPositive={true} />
        <MetricCard title="CX Health Score" value="94/100" change="+4% optimization" isPositive={true} />
        <MetricCard title="Ethical Alignment" value="88%" change="Action Required" isPositive={false} />
        <MetricCard title="Projected ROI" value="$14,500" change="+15% vs last month" isPositive={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold mb-4" style={{ color: COLORS.navy }}>Latest AI Recommendation</h3>
          <div className="p-4 rounded-lg bg-orange-50 border-l-4" style={{ borderColor: COLORS.orange }}>
            <div className="flex items-start">
              <Zap style={{ color: COLORS.orange }} className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="font-bold" style={{ color: COLORS.darkGray }}>High Cart Abandonment Detected</h4>
                <p className="text-sm mt-1 text-gray-600">PlexAI noticed a 12% drop-off on the checkout page for mobile users. Suggest deploying a personalized 10% discount email sprint.</p>
                <button 
                  className="mt-3 px-4 py-2 text-sm text-white font-semibold rounded shadow-sm"
                  style={{ backgroundColor: COLORS.orange }}
                >
                  Automate Response
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold mb-4" style={{ color: COLORS.navy }}>Active Integrations</h3>
          <div className="space-y-4">
            <IntegrationStatus name="Google Analytics 4" status="Connected" />
            <IntegrationStatus name="ClientZen Feedback" status="Connected" />
            <IntegrationStatus name="Shopify Store" status="Connected" />
            <IntegrationStatus name="Salesforce CRM" status="Syncing..." pending={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CXPulseView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold" style={{ color: COLORS.navy }}>Real-Time CX Pulse</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold mb-2">Customer Journey Drop-offs</h3>
          <div className="space-y-4 mt-6">
            <ProgressBar label="Homepage Landing" value={100} color={COLORS.navy} />
            <ProgressBar label="Product Page Views" value={76} color={COLORS.navy} />
            <ProgressBar label="Add to Cart" value={42} color={COLORS.gold} />
            <ProgressBar label="Checkout Completed" value={18} color={COLORS.orange} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center">
           <div className="text-center">
             <Activity size={48} style={{ color: COLORS.gold }} className="mx-auto mb-4" />
             <h3 className="text-xl font-bold mb-2">AI Personalization Engine</h3>
             <p className="text-gray-500 text-sm mb-6">PlexAI is currently dynamically serving 3 variations of your landing page based on incoming traffic demographics.</p>
             <button className="px-6 py-2 rounded-md border-2 font-semibold transition-colors" style={{ borderColor: COLORS.navy, color: COLORS.navy }}>
               View A/B Test Results
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}

function StrategySprintsView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold" style={{ color: COLORS.navy }}>Agile Strategy Sprints</h2>
        <span className="text-sm font-semibold px-3 py-1 bg-gray-200 rounded-full">2 Active</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-gray-100" style={{ borderTopColor: COLORS.gold }}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold">Q3 B2B Outreach Campaign</h3>
            <span className="text-xs font-bold text-gray-500">Day 4 of 14</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">AI-generated LinkedIn ad copy targeting tech startup founders with personalized pain-point messaging.</p>
          <div className="space-y-2">
            <TaskItem text="Review AI Ad Copy Variations" completed={true} />
            <TaskItem text="Approve Media Spend Budget" completed={false} />
            <TaskItem text="Launch Campaign" completed={false} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-gray-100" style={{ borderTopColor: COLORS.orange }}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold">Post-Purchase Retention Drip</h3>
            <span className="text-xs font-bold text-gray-500">Day 1 of 7</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Automated setup of a 3-part email sequence to convert first-time buyers into repeat customers.</p>
          <div className="space-y-2">
            <TaskItem text="Segment Audience Data" completed={true} />
            <TaskItem text="Draft Email 1 (Thank You + Value)" completed={true} />
            <TaskItem text="Draft Email 2 (Cross-sell)" completed={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EthicalAnalyzerView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold" style={{ color: COLORS.navy }}>Ethical Brand Analyzer</h2>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold" style={{ color: COLORS.navy }}>88/100</h3>
          <p className="text-gray-500 font-medium">Overall Brand Alignment Score</p>
        </div>
        <ShieldCheck size={64} style={{ color: COLORS.gold }} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-bold">Latest NLP Scans</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <ScanResult 
            asset="Homepage 'About Us' Copy" 
            status="Passed" 
            notes="Strong, inclusive language detected. High authenticity."
            color={COLORS.navy}
          />
          <ScanResult 
            asset="Instagram 'Eco-Friendly' Post" 
            status="Warning" 
            notes="Flagged for potential greenwashing. Suggestion: Add specific carbon offset metrics to validate claims."
            color={COLORS.orange}
          />
          <ScanResult 
            asset="Q2 Hiring Campaign" 
            status="Passed" 
            notes="Excellent diversity and equal opportunity messaging."
            color={COLORS.navy}
          />
        </div>
      </div>
    </div>
  );
}

function ROICommandView() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold" style={{ color: COLORS.navy }}>ROI Command Center</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-gray-500 text-sm mb-1">Total AI Strategy Value</p>
          <h3 className="text-3xl font-bold" style={{ color: COLORS.gold }}>$14,500</h3>
          <p className="text-xs text-green-500 mt-2 font-semibold flex items-center justify-center">
            <TrendingUp size={14} className="mr-1" /> +15% vs Last Month
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-gray-500 text-sm mb-1">Customer Acquisition Cost</p>
          <h3 className="text-3xl font-bold" style={{ color: COLORS.navy }}>$42.50</h3>
          <p className="text-xs text-green-500 mt-2 font-semibold flex items-center justify-center">
            <TrendingUp size={14} className="mr-1" /> -8% (Improved)
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <p className="text-gray-500 text-sm mb-1">PlexAI Software ROI</p>
          <h3 className="text-3xl font-bold" style={{ color: COLORS.orange }}>4.2x</h3>
          <p className="text-xs text-gray-400 mt-2 font-semibold">Based on Pro Tier ($699/mo)</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
         <h3 className="font-bold mb-6">KPI Tracking vs Benchmarks</h3>
         <div className="space-y-6">
           <ProgressBar label="Revenue Growth (Goal: 15%)" value={85} color={COLORS.navy} showPercentage={true} text="12.75% achieved" />
           <ProgressBar label="Brand Recall Lift (Goal: 25%)" value={60} color={COLORS.gold} showPercentage={true} text="15% achieved" />
           <ProgressBar label="Audience Engagement" value={100} color={COLORS.orange} showPercentage={true} text="Target Exceeded" />
         </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, isPositive }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-gray-500 text-sm font-medium mb-1">{title}</h4>
      <p className="text-2xl font-bold" style={{ color: COLORS.navy }}>{value}</p>
      <p className={`text-xs mt-2 font-semibold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
        {change}
      </p>
    </div>
  );
}

function IntegrationStatus({ name, status, pending }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <span className="font-medium text-sm">{name}</span>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${pending ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
        {status}
      </span>
    </div>
  );
}

function ProgressBar({ label, value, color, showPercentage, text }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        {showPercentage && <span className="text-gray-500 text-xs font-bold">{text}</span>}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="h-2.5 rounded-full transition-all duration-1000" style={{ width: `${value}%`, backgroundColor: color }}\></div>
      </div>
    </div>
  );
}

function TaskItem({ text, completed }: any) {
  return (
    <div className="flex items-start space-x-2">
      {completed ? 
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500" /> : 
        <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5"\></div>
      }
      <span className={`text-sm ${completed ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}>
        {text}
      </span>
    </div>
  );
}

function ScanResult({ asset, status, notes, color }: any) {
  return (
    <div className="p-6 flex items-start space-x-4">
      {status === 'Warning' ? 
        <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: color }} /> : 
        <ShieldCheck className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: color }} />
      }
      <div>
        <h4 className="font-bold text-gray-800 flex items-center">
          {asset} 
          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-gray-100" style={{ color: color }}>{status}</span>
        </h4>
        <p className="text-sm text-gray-600 mt-1">{notes}</p>
        {status === 'Warning' && (
          <button className="mt-2 text-xs font-bold underline" style={{ color: COLORS.orange }}>
            Apply AI Narrative Adjustment
          </button>
        )}
      </div>
    </div>
  );
}
