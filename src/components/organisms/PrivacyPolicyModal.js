import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Text } from 'components/atoms'

export const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <Drawer size="sm" isOpen={true} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text.ScreenTitle>Políticas de Privacidade</Text.ScreenTitle>
        </DrawerHeader>

        <DrawerBody
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur. Sagittis velit vulputate
            vestibulum posuere nulla senectus. Cursus cras molestie eu integer
            varius lobortis at feugiat consequat. Commodo pharetra morbi est
            morbi vitae velit gravida suspendisse eu. Suscipit ut scelerisque
            nulla mauris posuere praesent id. Et mi vitae neque nulla. Enim
            risus posuere eget enim sit adipiscing suspendisse hendrerit purus.
            Posuere maecenas tincidunt quisque amet facilisi arcu pharetra.
            Ultrices in non egestas nulla pretium laoreet turpis. Habitant nibh
            sagittis nulla volutpat odio. Nunc lorem eget arcu pharetra. Diam
            sagittis vestibulum mattis mi quisque dis morbi. Feugiat praesent
            erat mauris ac dictum ornare. Egestas amet lorem etiam enim ipsum
            scelerisque. Pellentesque nisl massa purus aliquam semper dolor.
            Massa libero massa curabitur duis quisque odio ullamcorper nec. Amet
            suspendisse volutpat porta duis ultrices vitae volutpat. Sociis
            vitae urna ultrices arcu leo. Accumsan cras pretium massa pretium ac
            a semper eget. Pellentesque ut volutpat viverra lacus quis lectus
            duis sapien. Nulla tempus quis est sed. Leo interdum commodo et
            urna. Neque a tincidunt sit odio ut urna commodo. In et tempor arcu
            quis elit. Venenatis leo commodo eget lorem dictum. Sed pellentesque
            ac parturient placerat iaculis venenatis commodo. Aliquet magna orci
            id egestas tempor tortor leo. Aliquet gravida adipiscing facilisi
            massa. Aliquet sit mauris adipiscing lectus. Ligula odio hendrerit
            justo tellus sed. Vel diam a nisi feugiat mauris lectus sapien. Odio
            etiam quis feugiat posuere. In blandit eget tellus nunc. Risus
            sollicitudin felis facilisi ut pellentesque eget. In accumsan risus
            nulla venenatis lorem in viverra condimentum in. Nulla non porttitor
            auctor praesent scelerisque. Sed tortor nulla fringilla tristique
            tellus. Purus a semper ullamcorper eu eleifend diam. Etiam ac mattis
            faucibus ut eget pharetra. Turpis nullam in condimentum at pulvinar
            massa sed arcu. Faucibus imperdiet tempor dui sed vulputate aenean
            tortor massa. Amet pretium nunc ante est enim duis nulla. Arcu dolor
            nec fames a nec vel. Dignissim ultricies ut lectus etiam tellus.
            Vestibulum at praesent in donec at pellentesque est. Hac eu sodales
            varius nulla ullamcorper eget amet lorem aliquam. Elementum
            facilisis elementum varius aenean pharetra sit mattis consectetur.
            Risus rhoncus in convallis amet blandit ullamcorper. Accumsan quam
            eu proin suspendisse a viverra tellus. In eget odio elit convallis
            id. Ipsum at penatibus fermentum lacinia in nec nullam nullam sit.
            Arcu ac nulla ultricies rhoncus a. Eleifend pretium viverra tellus
            morbi. Aliquam blandit aliquam diam tincidunt. Lectus sed nunc
            molestie condimentum nunc. Scelerisque at venenatis massa ultrices
            mauris eget nulla amet. Pharetra iaculis erat congue pellentesque
            cras tortor cras aliquam tempus. Tortor at amet amet non vehicula.
            Nullam faucibus ac morbi sapien non neque orci egestas tristique.
            Magna cursus mauris odio turpis urna vel odio hendrerit. Ultrices
            nibh proin lectus ornare vivamus amet nulla ultrices. Ipsum diam sed
            laoreet sit ultrices elementum morbi ut nulla. Vivamus fermentum
            turpis nulla amet augue fames facilisi. Urna eu massa.
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
