"use client";

import { useState } from "react";
import Link from "next/link";
import AdminNavItem from "./AdminNavItem";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import Container from "../Container";

const AdminNav = () => {
  const pathname = usePathname();
  const [showProductsSubMenu, setShowProductsSubMenu] = useState(false);
  const [showPromoSubMenu, setShowPromoSubMenu] = useState(false);

  // Function to toggle showing products submenu
  const toggleProductsSubMenu = () => {
    setShowProductsSubMenu(!showProductsSubMenu);
  };

  // Function to toggle showing promo submenu
  const togglePromoSubMenu = () => {
    setShowPromoSubMenu(!showPromoSubMenu);
  };

  return (
    <div className=" shadow-md mt-20">
      <div className="p-10">
        <div className=" grid items-start justify-start md:justify-start gap-8 md:gap-12">
          <Link href="/admin">
            <AdminNavItem
              label="Home"
              icon={MdDashboard}
              selected={pathname === "/admin"}
            />
          </Link>

          <div>
            <div onClick={toggleProductsSubMenu}>
              <AdminNavItem
                label="Products"
                icon={showProductsSubMenu ? MdDns : MdLibraryAdd}
              />
            </div>
            {showProductsSubMenu && (
              <div className="ml-10">
                <Link href="/admin/add-products">
                  <AdminNavItem
                    label="Add Products"
                    icon={MdLibraryAdd}
                    selected={pathname === "/admin/add-products"}
                  />
                </Link>
                <Link href="/admin/manage-products">
                  <AdminNavItem
                    label="Manage Products"
                    icon={MdDns}
                    selected={pathname === "/admin/manage-products"}
                  />
                </Link>
              </div>
            )}
          </div>

          {/* Promotions */}

          <div>
            <div onClick={togglePromoSubMenu}>
              <AdminNavItem
                label="Promotions"
                icon={showProductsSubMenu ? MdDns : MdLibraryAdd}
              />
            </div>
            {showPromoSubMenu && (
              <div className="ml-10">
                <Link href="/admin/promo-codes">
                  <AdminNavItem
                    label="Promo Codes"
                    icon={MdLibraryAdd}
                    selected={pathname === "/admin/promo-codes"}
                  />
                </Link>
                <Link href="/admin/add-promo">
                  <AdminNavItem
                    label="Add Promo Codes"
                    icon={MdDns}
                    selected={pathname === "/admin/add-promo"}
                  />
                </Link>
              </div>
            )}
          </div>
          <Link href="/admin/manage-orders">
            <AdminNavItem
              label="ManageOrders"
              icon={MdFormatListBulleted}
              selected={pathname === "/admin/manage-orders"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
