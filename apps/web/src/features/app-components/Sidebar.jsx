import React, { useState, useEffect, useCallback } from 'react';
import {
  LayoutDashboard,
  FileText,
  Receipt,
  FolderOpen,
  Users,
  Package,
  Settings,
  Shield,
  LogOut,
  ChevronLeft,
} from 'lucide-react';
import './sidebar.css';

/**
 * Collapsible App Sidebar Component
 * Supports expanded (264px) and collapsed (72px) modes with conflict-safe keyboard shortcuts,
 * localStorage persistence, and smooth GPU-accelerated transitions.
 */
export function Sidebar({
  currentPage = 'dashboard',
  onNavigate = () => {},
  userRole = 'user',
  onLogout = () => {},
  trialDaysLeft = 7,
}) {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem('invonxt_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });

  const toggleSidebar = useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('invonxt_sidebar_collapsed', String(next));
      } catch (err) {
        console.error('Failed to save sidebar state to localStorage', err);
      }

      // Sync shell class if applied outside React root
      const shell = document.querySelector('.app-shell');
      if (shell) {
        shell.classList.toggle('sidebar-collapsed', next);
      }

      return next;
    });
  }, []);

  // Keyboard shortcut listener: Ctrl+B or Ctrl+\ (safely guarded against input/textarea conflicts)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const target = e.target;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key.toLowerCase() === 'b' || e.key === '\\')
      ) {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  // Sync shell class on mount
  useEffect(() => {
    const shell = document.querySelector('.app-shell');
    if (shell) {
      shell.classList.toggle('sidebar-collapsed', collapsed);
    }
  }, [collapsed]);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'expenses', label: 'Expenses', icon: Receipt },
    { id: 'documents', label: 'Documents', icon: FolderOpen },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'items', label: 'Items & Services', icon: Package },
  ];

  return (
    <aside
      className={`app-sidebar relative flex h-full flex-col border-r border-slate-200 bg-white transition-[width] duration-250 ease-out ${
        collapsed ? 'w-[72px]' : 'w-[264px]'
      }`}
      aria-label="Main Navigation"
    >
      {/* Floating Toggle Arrow Button */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="sidebar-toggle-btn absolute -right-3.5 top-5 z-30 flex size-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:scale-110 hover:border-emerald-300 hover:text-[#00856f] focus:outline-none focus:ring-2 focus:ring-[#10a887]"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        title={collapsed ? 'Expand sidebar (Ctrl+B or Ctrl+\\)' : 'Collapse sidebar (Ctrl+B or Ctrl+\\)'}
      >
        <ChevronLeft
          size={16}
          className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {/* Brand Header */}
      <div className="flex h-16 items-center px-4 border-b border-slate-100">
        {collapsed ? (
          <div className="sidebar-logo-icon mx-auto grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#00856f] to-[#10a887] text-base font-black text-white shadow-sm">
            IN
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[#00856f] to-[#10a887] text-base font-black text-white shadow-sm">
              IN
            </div>
            <span className="text-lg font-black tracking-tight text-slate-900">
              Invo<span className="text-[#10a887]">Nxt</span>
            </span>
          </div>
        )}
      </div>

      {/* Navigation Scrollable Area */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4 scrollbar-thin">
        <div>
          {!collapsed && (
            <p className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Menu
            </p>
          )}
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <li key={item.id} className="relative group">
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-emerald-50 text-[#00856f]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    } ${collapsed ? 'justify-center px-0' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={19} className={isActive ? 'text-[#00856f]' : 'text-slate-500'} />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </button>

                  {/* Tooltip on Collapsed Mode */}
                  {collapsed && (
                    <div className="sidebar-tooltip pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 z-50">
                      {item.label}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Admin Section */}
        {userRole === 'admin' && (
          <div>
            {!collapsed && (
              <p className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Administration
              </p>
            )}
            <ul className="space-y-1">
              <li className="relative group">
                <button
                  type="button"
                  onClick={() => onNavigate('super-admin')}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                    currentPage === 'super-admin'
                      ? 'bg-emerald-50 text-[#00856f]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  } ${collapsed ? 'justify-center px-0' : ''}`}
                >
                  <Shield size={19} />
                  {!collapsed && <span className="truncate">Super Admin</span>}
                </button>
                {collapsed && (
                  <div className="sidebar-tooltip pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 z-50">
                    Super Admin
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Footer / Account / Trial Area */}
      <div className="border-t border-slate-100 p-3 space-y-2">
        {/* Trial Status Box */}
        {trialDaysLeft > 0 && !collapsed && (
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 text-xs">
            <div className="flex items-center justify-between font-bold text-[#00856f]">
              <span>Free Trial Active</span>
              <span className="rounded bg-emerald-100 px-1.5 py-0.5">{trialDaysLeft}d left</span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('premium')}
              className="mt-2.5 w-full rounded-md bg-[#00856f] py-1.5 text-center font-bold text-white transition hover:bg-[#00705e]"
            >
              Upgrade Now
            </button>
          </div>
        )}

        {/* Settings & Logout */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => onNavigate('settings')}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 ${
              collapsed ? 'justify-center px-0' : ''
            }`}
            title="Settings"
          >
            <Settings size={18} />
            {!collapsed && <span>Settings</span>}
          </button>
          <button
            type="button"
            onClick={onLogout}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 ${
              collapsed ? 'justify-center px-0' : ''
            }`}
            title="Log out"
          >
            <LogOut size={18} />
            {!collapsed && <span>Log out</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

