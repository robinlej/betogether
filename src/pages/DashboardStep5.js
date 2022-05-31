import { useCallback, useEffect, useState } from "react";
import {
  GroupNameDiv,
  GroupProjectsMainDiv,
  ConsultResultsPageDiv,
} from "../components/DashboardStep5PageElements";
import GroupsPreview from "../components/GroupsPreview";
import { v4 as uuidv4 } from "uuid";

const DashboardStep5 = ({ nextPage, groupProject }) => {
  const groups = [
    {
      groupNumber: 'Group 1',
      groupProjectTitle: 'The DogBook',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor. Tristique senectus et netus et malesuada fames ac. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Velit sed ullamcorper morbi tincidunt ornare massa eget. Cursus in hac habitasse platea dictumst quisque sagittis. Sed turpis tincidunt id aliquet. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Viverra mauris in aliquam sem fringilla ut morbi. Mi ipsum faucibus vitae aliquet. Id porta nibh venenatis cras. Vulputate sapien nec sagittis aliquam malesuada. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Morbi leo urna molestie at. In aliquam sem fringilla ut morbi. Nibh ipsum consequat nisl vel pretium lectus quam id leo.

        Nibh ipsum consequat nisl vel pretium. Bibendum enim facilisis gravida neque convallis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Mattis aliquam faucibus purus in massa tempor. Urna id volutpat lacus laoreet non. Sit amet cursus sit amet dictum sit amet justo donec. Adipiscing tristique risus nec feugiat in fermentum posuere. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse faucibus interdum posuere lorem ipsum. Egestas dui id ornare arcu odio ut sem. A pellentesque sit amet porttitor eget dolor morbi. Diam maecenas ultricies mi eget mauris pharetra. Eget nullam non nisi est sit amet facilisis. Urna neque viverra justo nec ultrices dui sapien eget mi.

        Elit duis tristique sollicitudin nibh sit. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Augue neque gravida in fermentum et sollicitudin ac. Pulvinar pellentesque habitant morbi tristique senectus. Eu non diam phasellus vestibulum lorem sed risus ultricies. Cum sociis natoque penatibus et magnis. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Vitae semper quis lectus nulla. Elit scelerisque mauris pellentesque pulvinar pellentesque. Arcu dui vivamus arcu felis bibendum. Tortor posuere ac ut consequat semper. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Scelerisque varius morbi enim nunc. Cursus vitae congue mauris rhoncus.

        Condimentum lacinia quis vel eros donec ac odio. Mattis nunc sed blandit libero volutpat sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ut pharetra sit amet aliquam id diam maecenas. Maecenas sed enim ut sem viverra aliquet eget sit amet. Netus et malesuada fames ac turpis egestas sed tempus. Ut venenatis tellus in metus vulputate. Adipiscing enim eu turpis egestas pretium aenean pharetra. Luctus accumsan tortor posuere ac ut. In mollis nunc sed id semper risus.`,
      dbSchemaPic:
        'https://res.cloudinary.com/georgianam22/image/upload/v1653988995/UserDbSchemaImages/xgy9jsnwmoqxso3wclyg.jpg',
      projectSketch:
        'https://res.cloudinary.com/georgianam22/image/upload/v1653988989/UserMockupImages/vimfaq2lgw524lywyxdh.jpg',
      links: '',
      students: [
        {
          name: 'Dylan Burgisser',
          picture:
            'https://res.cloudinary.com/georgianam22/image/upload/v1653988524/UserProfilePicture/aeg8jcr4qe8dsi8qaexv.jpg',
        },
        {
          name: 'Charlotte Günther',
          picture:
            'https://res.cloudinary.com/georgianam22/image/upload/v1653988266/UserProfilePicture/cpfdi4ja5izmov3ffe3n.jpg',
        },
        {
          name: 'Robin Lejeune',
          picture:
            'https://res.cloudinary.com/georgianam22/image/upload/v1653921005/UserProfilePicture/xtbtumb8tvzwworm53ew.jpg',
        },
      ],
    },
    {
      groupNumber: 'Group 2',
      groupProjectTitle: 'Not another cookbook',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor. Tristique senectus et netus et malesuada fames ac. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Velit sed ullamcorper morbi tincidunt ornare massa eget. Cursus in hac habitasse platea dictumst quisque sagittis. Sed turpis tincidunt id aliquet. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Viverra mauris in aliquam sem fringilla ut morbi. Mi ipsum faucibus vitae aliquet. Id porta nibh venenatis cras. Vulputate sapien nec sagittis aliquam malesuada. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Morbi leo urna molestie at. In aliquam sem fringilla ut morbi. Nibh ipsum consequat nisl vel pretium lectus quam id leo.

        Nibh ipsum consequat nisl vel pretium. Bibendum enim facilisis gravida neque convallis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Mattis aliquam faucibus purus in massa tempor. Urna id volutpat lacus laoreet non. Sit amet cursus sit amet dictum sit amet justo donec. Adipiscing tristique risus nec feugiat in fermentum posuere. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse faucibus interdum posuere lorem ipsum. Egestas dui id ornare arcu odio ut sem. A pellentesque sit amet porttitor eget dolor morbi. Diam maecenas ultricies mi eget mauris pharetra. Eget nullam non nisi est sit amet facilisis. Urna neque viverra justo nec ultrices dui sapien eget mi.

        Elit duis tristique sollicitudin nibh sit. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Augue neque gravida in fermentum et sollicitudin ac. Pulvinar pellentesque habitant morbi tristique senectus. Eu non diam phasellus vestibulum lorem sed risus ultricies. Cum sociis natoque penatibus et magnis. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Vitae semper quis lectus nulla. Elit scelerisque mauris pellentesque pulvinar pellentesque. Arcu dui vivamus arcu felis bibendum. Tortor posuere ac ut consequat semper. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Scelerisque varius morbi enim nunc. Cursus vitae congue mauris rhoncus.

        Condimentum lacinia quis vel eros donec ac odio. Mattis nunc sed blandit libero volutpat sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ut pharetra sit amet aliquam id diam maecenas. Maecenas sed enim ut sem viverra aliquet eget sit amet. Netus et malesuada fames ac turpis egestas sed tempus. Ut venenatis tellus in metus vulputate. Adipiscing enim eu turpis egestas pretium aenean pharetra. Luctus accumsan tortor posuere ac ut. In mollis nunc sed id semper risus.`,
      dbSchemaPic:
        'https://res.cloudinary.com/georgianam22/image/upload/v1653989427/UserDbSchemaImages/vczkrtqdblvwdywyxnno.jpg',
      projectSketch:
        'https://res.cloudinary.com/georgianam22/image/upload/v1653989422/UserMockupImages/pdbid2pynsysho91qnel.jpg',
      links: '',
      students: [
        {
          name: 'Laurent Eyckermans',
          picture:
            'https://res.cloudinary.com/georgianam22/image/upload/v1653988374/UserProfilePicture/vezdwmxebmbdvditatfg.jpg',
        },
        {
          name: 'Georgiana Marcu',
          picture:
            'https://res.cloudinary.com/georgianam22/image/upload/v1653992240/UserProfilePicture/ukel3diip7pqk2szyvp2.jpg',
        },
        {
          name: 'Anthony Hoyas',
          picture:
            'https://res.cloudinary.com/georgianam22/image/upload/v1653998057/UserProfilePicture/iiypjrljrt2j1er3d2yh.jpg',
        },
      ],
    },
  ]

  const [expandedItems, setExpandedItems] = useState(
    groups.map((group) => ({
      id: group.groupProjectTitle,
      isExpanded: false,
    }))
  )
  const [lastItemClicked, setLastItemClicked] = useState(null)

  const expandItem = useCallback((item) => {
    let newExpandedItems = [...expandedItems]
    const expandedItem =
      newExpandedItems[
        groups.indexOf(
          groups.find((group) => group.groupProjectTitle === item.id)
        )
      ]

    expandedItem.isExpanded = !expandedItem.isExpanded

    // if another item was already expanded, shrink it
    if (
      newExpandedItems.some(
        (otherItem) => otherItem.isExpanded && otherItem !== expandedItem
      )
    ) {
      newExpandedItems = newExpandedItems.map((otherItem) => {
        // if another item is expanded && it's not the item we clicked on, set to false
        if (otherItem.isExpanded && otherItem !== expandedItem) {
          return { ...otherItem, isExpanded: false }
        } else {
          return otherItem
        }
      })
    }

    setExpandedItems(newExpandedItems)
    setLastItemClicked({
      id: groups.indexOf(
        groups.find((group) => group.groupProjectTitle === item.id)
      ),
      isExpanded: expandedItem.isExpanded,
    })
  }, [])

  useEffect(() => {
    if (lastItemClicked !== null) {
      const item = [...document.querySelectorAll('article')][lastItemClicked.id]
      window.scrollTo({
        top: item.offsetTop,
        behavior: 'smooth',
      })
    }
  }, [lastItemClicked])

  return (
    <main>
      <ConsultResultsPageDiv>
        <GroupNameDiv>
          <h2 style={{ color: '#63C3D1' }}> You are in Group 2 </h2>
          <h3 style={{ color: '#EE964B', fontSize: '16px' }}>
            {' '}
            Deadline: 22nd July{' '}
          </h3>
        </GroupNameDiv>
        <GroupProjectsMainDiv>
          {groups.map((group, i) => {
            return (
              <GroupsPreview
                key={uuidv4()}
                group={group}
                expandItem={expandItem}
                isExpanded={expandedItems[i].isExpanded}
              />
            )
          })}
        </GroupProjectsMainDiv>
      </ConsultResultsPageDiv>
    </main>
  )
}

export default DashboardStep5;
