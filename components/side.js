import Link from "next/link"
export default function Side({  }) {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" >
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
        <span className="brand-text font-weight-light">管理画面</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar" >

        {/* SidebarSearch Form */}
        <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
                <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
                </button>
            </div>
            </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                <i className="nav-icon fa fa-home"></i>
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className="nav-link">
                <i className="nav-icon fas fa-edit"></i>
                <p>登録</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>履歴</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        </aside>
    )
}