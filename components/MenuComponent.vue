<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api';
import { SidebarItem, SidebarMenu } from 'vue-sidebar-menu';

export default defineComponent({
  components: {
    SidebarMenu,
  },
  setup() {
    const state = reactive({
      collapsed: false,
      isOnMobile: false,
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true,
        },
        {
          href: '#',
          title: 'Dashboard',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'template',
            },
            text: 'Custom Icon Text',
          },
          badge: {
            text: 'new',
            class: 'vsm--badge_default',
          }
        },
        {
          href: '#',
          title: 'Projects',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'collection',
            },
          },
        },
        {
          href: '#',
          title: 'Calendar',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'calendar',
            },
          },
        },
        {
          href: '#',
          title: 'Customers',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'office-building',
            },
          },
        },
        {
          href: '#',
          title: 'Billing',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'credit-card',
            },
          },
        },
        {
          href: '#',
          title: 'Users',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'users',
            },
          },
        },
        {
          href: '#',
          title: 'Reports',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'document-report',
            },
          },
        },
        {
          href: '#',
          title: 'Documentation',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'document-text',
            },
          },
        },
        {
          title: 'Settings',
          icon: {
            element: 'base-icon-outlined',
            class: 'text-gray-300',
            attributes: {
              name: 'cog',
            },
          },
          child: [
            {
              title: 'Territories List',
              href: '#',
            },
            {
              title: 'Service Areas',
              child: [
                {
                  title: 'Add Service Area',
                },
                {
                  title: 'Assign Service Tech',
                },
              ],
            },
            {
              title: 'Preferences',
            },
            {
              title: 'Service Types',
              child: [
                {
                  title: 'Just an example',
                  child: [
                    {
                      title: 'A Page',
                    },
                    {
                      title: 'Another Page',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ] as SidebarItem[]
    })

    return {
      ...toRefs(state)
    }
  },
  // props: {
  //   menu: {
  //     type: Array,
  //     default: () => [
  //       {
  //         header: true,
  //         title: 'Main Navigation',
  //         hiddenOnCollapse: true,
  //       },
  //       {
  //         href: '#',
  //         title: 'Dashboard',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'template',
  //           },
  //           text: 'Custom Icon Text',
  //         },
  //         badge: {
  //           text: 'new',
  //           class: 'vsm--badge_default'
  //           // attributes: {}
  //           // element: 'span'
  //         }
  //       },
  //       {
  //         href: '#',
  //         title: 'Projects',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'collection',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Calendar',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'calendar',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Customers',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'office-building',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Billing',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'credit-card',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Users',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'users',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Reports',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'document-report',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Documentation',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'document-text',
  //           },
  //         },
  //       },
  //       {
  //         title: 'Settings',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'cog',
  //           },
  //         },
  //         child: [
  //           {
  //             title: 'Territories List',
  //             href: '#',
  //           },
  //           {
  //             title: 'Service Areas',
  //             child: [
  //               {
  //                 title: 'Add Service Area',
  //               },
  //               {
  //                 title: 'Assign Service Tech',
  //               },
  //             ],
  //           },
  //           {
  //             title: 'Preferences',
  //           },
  //           {
  //             title: 'Service Types',
  //             child: [
  //               {
  //                 title: 'Just an example',
  //                 child: [
  //                   {
  //                     title: 'A Page',
  //                   },
  //                   {
  //                     title: 'Another Page',
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ]
  //   }
  // },
  // data() {
  //   return {
  //     collapsed: false,
  //     isOnMobile: false,
  //     menu: [
  //       {
  //         header: true,
  //         title: 'Main Navigation',
  //         hiddenOnCollapse: true,
  //       },
  //       {
  //         href: '#',
  //         title: 'Dashboard',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'template',
  //           },
  //           text: 'Custom Icon Text',
  //         },
  //         badge: {
  //           text: 'new',
  //           class: 'vsm--badge_default'
  //           // attributes: {}
  //           // element: 'span'
  //         }
  //       },
  //       {
  //         href: '#',
  //         title: 'Projects',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'collection',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Calendar',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'calendar',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Customers',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'office-building',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Billing',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'credit-card',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Users',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'users',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Reports',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'document-report',
  //           },
  //         },
  //       },
  //       {
  //         href: '#',
  //         title: 'Documentation',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'document-text',
  //           },
  //         },
  //       },
  //       {
  //         title: 'Settings',
  //         icon: {
  //           element: 'base-icon-outlined',
  //           class: 'text-gray-300',
  //           attributes: {
  //             name: 'cog',
  //           },
  //         },
  //         child: [
  //           {
  //             title: 'Territories List',
  //             href: '#',
  //           },
  //           {
  //             title: 'Service Areas',
  //             child: [
  //               {
  //                 title: 'Add Service Area',
  //               },
  //               {
  //                 title: 'Assign Service Tech',
  //               },
  //             ],
  //           },
  //           {
  //             title: 'Preferences',
  //           },
  //           {
  //             title: 'Service Types',
  //             child: [
  //               {
  //                 title: 'Just an example',
  //                 child: [
  //                   {
  //                     title: 'A Page',
  //                   },
  //                   {
  //                     title: 'Another Page',
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ] as SidebarItem[]
  //   }
  // },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed: boolean) {
      this.collapsed = collapsed;
      this.$emit('toggle-collapse', collapsed);
    },

    onItemClick(event: PointerEvent, item: SidebarItem, vnode: Vue) {
      console.log(event, item, vnode);
    },

    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = false;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    }
  }
})
</script>

<template>
  <sidebar-menu
    width="264px"
    :menu="menu"
    :collapsed="collapsed"
    :show-one-child="true"
    @toggle-collapse="onToggleCollapse"
    @item-click="onItemClick"
  >
    <div slot="header">
      <a href="#" class="flex items-center py-2 bg-white text-primary-500">
        <base-logo name="hancock-h"></base-logo>

        <span v-if="!collapsed" class="font-bold" style="white-space: nowrap;">Claims Consultants</span>
      </a>

      <div class="p-2 mt-3">
        <a href="#" class="flex items-center text-white hover:text-white">
          <base-avatar class="w-8 h-8 rounded-full"></base-avatar>

          <div v-if="!collapsed" class="ml-2 text-xs">
            <span class="font-bold uppercase">Michael Houser</span>
            <div>mhouser@hancockclaims.com</div>
          </div>
        </a>
      </div>
    </div>

    <span slot="toggle-icon" class="flex items-center px-2 space-x-2">
      <span>
        <base-icon-outlined
          class="w-5 h-5 text-gray-300"
          :name="collapsed ? 'chevron-right' : 'chevron-left'"
        ></base-icon-outlined>
      </span>

      <span v-if="!collapsed" class="whitespace-nowrap">Toggle Toolbar</span>
    </span>

    <span slot="dropdown-icon">
      <base-icon-outlined name="chevron-right"></base-icon-outlined>
    </span>
  </sidebar-menu>
</template>
