<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="../../assets/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
      name: 'sidebar',
      data() {
          return {
              currentIndex: 0,
              currentLevel: 0,
              sidebarList: [{
                  icon: 'fa-home',
                  title: '首页',
                  link: '/',
                  children: []
              }, {
                  icon: 'fa-link',
                  title: '其他链接',
                  link: '/other',
                  children: []
              }, {
                  icon: 'fa-bars',
                  title: '下拉菜单',
                  link: '#',
                  children: [{
                      icon: 'fa-link',
                      title: '子菜单1',
                      link: '/multiLevel/level1'
                  }, {
                      icon: 'fa-link',
                      title: '子菜单2',
                      link: '/multiLevel/level2'
                  }]
              }]
          }
      },
      methods: {
          // 一级目录样式切换
          handleNav(item, index) {
              this.currentIndex = index;
              localStorage.setItem('navIndex', this.currentIndex);
              if (!item.children.length) {
                  this.currentLevel = 0;
                  localStorage.removeItem('levelIndex');
              }
          },
          // 二级目录样式切换
          handleLevel(index) {
              this.currentLevel = index + 1;
              localStorage.setItem('levelIndex', this.currentLevel);
          }
      },
      mounted() {
          if (localStorage.getItem('navIndex')) {
              this.currentIndex = parseInt(localStorage.getItem('navIndex'));
          }
          if (localStorage.getItem('levelIndex')) {
              this.currentLevel = parseInt(localStorage.getItem('levelIndex'));
          }
      }
  }
</script>

<style lang="scss" scoped>
  .level-active {
      a {
          color: #fff !important;
      }
  }
</style>
