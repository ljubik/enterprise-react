import { Link, Text } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const StyledLink = chakra(Link, {
  baseStyle: {
    p: 1,
    fontWeight: 'bold',
  },
})

const LangSwitcher = ({ lang }) => {
  const router = useRouter()
  const { pathname, asPath, query } = router

  const changeLanguage = (locale) => {
    router.push({ pathname, query }, asPath, { locale })
  }
  return (
    <>
      {lang === 'en' && (
        <>
          <Text as='span' color='green.400' fontWeight='bold' p={1}>
            EN
          </Text>
          <StyledLink color='green.800' onClick={() => changeLanguage('de')}>
            DE
          </StyledLink>
          <StyledLink color='green.800' onClick={() => changeLanguage('ua')}>
            UA
          </StyledLink>
        </>
      )}
      {lang === 'de' && (
        <>
          <StyledLink color='green.800' onClick={() => changeLanguage('en')}>
            EN
          </StyledLink>
          <Text as='span' color='green.400' fontWeight='bold' p={1}>
            DE
          </Text>
          <StyledLink color='green.800' onClick={() => changeLanguage('ua')}>
            UA
          </StyledLink>
        </>
      )}
      {lang === 'ua' && (
        <>
          <StyledLink color='green.800' onClick={() => changeLanguage('en')}>
            EN
          </StyledLink>
          <StyledLink color='green.800' onClick={() => changeLanguage('de')}>
            DE
          </StyledLink>
          <Text as='span' color='green.400' fontWeight='bold' p={1}>
            UA
          </Text>
        </>
      )}
    </>
  )
}

export default LangSwitcher
