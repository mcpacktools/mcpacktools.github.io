import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Tooltip, Image } from "@nextui-org/react";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { DiscordIcon } from "../icons/sidebar/discord-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <a href="/"><Image src="https://cdn.discordapp.com/attachments/1172876272486068266/1172879221044023327/image.png?ex=66761e25&is=6674cca5&hm=5bf034e2e7b75b9229724999cd3633a75ab33b1383f2d95db5df7648463cdb78&" /></a>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Projects">
              <SidebarItem
                isActive={pathname === "/ranktag"}
                title="Rank Tag Generator"
                icon={<AccountsIcon />}
                href="ranktag"
              />
              <SidebarItem
                isActive={pathname === "/oraxengen"}
                title="Oraxen Generator"
                icon={<PaymentsIcon />}
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Discord"} color="primary">
              <div className="max-w-fit" style={{cursor: "pointer"}} onClick={event =>  window.location.href='https://discord.gg/GxVcPxfZFX'} >
                <DiscordIcon />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
